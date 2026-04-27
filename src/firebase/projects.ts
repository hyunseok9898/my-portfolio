import {
  collection,
  getDocs,
  doc,
  setDoc,
  writeBatch,
} from "firebase/firestore";
import { db } from "./config";
import { Project } from "./types";

// 📌 collection reference
const projectRef = collection(db, "Projects");

// ✅ 전체 조회
export const getProjects = async (): Promise<Project[]> => {
  const snapshot = await getDocs(projectRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Project, "id">),
  }));
};

// ✅ 단일 저장
export const createProject = async (project: Project) => {
  const { id, ...data } = project;
  await setDoc(doc(projectRef, id), data);
};

// ✅ 여러 개 한번에 저장 (batch)
export const createProjectsBatch = async (projects: Project[]) => {
  const batch = writeBatch(db);

  projects.forEach(({ id, ...data }) => {
    batch.set(doc(projectRef, id), data);
  });

  await batch.commit();
};
