{
  // constraints --> enforce required property
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Level 2";
    return {
      ...student,
      course,
    };
  };
  const student = addCourseToStudent({
    id: 1,
    name: "X",
    email: 'x@gmail.com',
    emni: "Emni",
  });
  console.log(student);
}
