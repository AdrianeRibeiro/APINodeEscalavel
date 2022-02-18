import { CreateChallengeSubmission } from "./create-challenge-submission"
import { InMemoryStudentsRepository } from '../../../tests/repositories/in-memory-students-repository'
import { InMemoryChallengesRepository } from "../../../tests/repositories/in-memory-challenges-repository"
import { Student } from "../../domain/entities/student"
import { Challenge } from "../../domain/entities/challenge"

describe('Create challenge submission use case', () => {
  it('should be able to create a new challenge submission', async () => {
    const studentsRepository = new InMemoryStudentsRepository()
    const challengeRepository = new InMemoryChallengesRepository()

    const student = Student.create({
      name: 'Diego',
      email: 'doe@example.com'
    })

    const challenge = Challenge.create({
      title: 'Challenge 01',
      instructionUrl: 'http://example.com'
    })

    studentsRepository.items.push(student)
    challengeRepository.items.push(challenge)

    const sut = new CreateChallengeSubmission(
      studentsRepository,
      challengeRepository
    )

    const response = await sut.execute({
      studentId: student.id,
      challengeId: challenge.id
    })

    expect(response).toBeTruthy()
  })
})