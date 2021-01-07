import React, { useEffect, useState } from "react";
import { Course } from "../../components/course/course";
import { db } from "../../firebase";
import firebase from "firebase";

interface CourseObject {
  id: string;
  data: firebase.firestore.DocumentData;
}

export const Courses: React.FC<{}> = () => {
  const [courses, setCourses] = useState<CourseObject[]>([]);

  useEffect(() => {
    db.collection("courses").onSnapshot((snapshot) => {
      setCourses(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);
  return (
    <div>
      {courses.map(({ id, data }) => {
        return (
          <Course
            key={id}
            title={data.title}
            image={data.image}
            createBy={data.createBy}
            id={id}
          />
        );
      })}
    </div>
  );
};
