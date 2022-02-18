import { Entity } from "../../core/domain/Entity";

type SubmissionProps = {
  challengeId: string;
  studentId: string;
  createdAt?: Date;
}

export class Submission extends Entity<SubmissionProps> {
  private constructor(props: SubmissionProps, id?:string) {
    super(props, id)
  }

  static create(props: SubmissionProps, id?:string) {
    const student = new Submission({
      ...props,
      createdAt: props.createdAt ?? new Date(),
    }, id)

    return student;
  }
}