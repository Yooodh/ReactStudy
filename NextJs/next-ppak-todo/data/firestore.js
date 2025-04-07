// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import { collection, query, where, getDocs } from 'firebase/firestore';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// import { initializeApp } from 'firebase/app';

import {} from 'firebase/firestore';

// Your web app's Firebase configuration
// 환경변수 설정
const firebaseConfig = {
  apiKey: 'process.env.API_KEY',
  authDomain: 'process.env.AUTH_DOMAIN ',
  projectId: 'process.env.PROJECT_ID',
  storageBucket: 'process.env.STORAGE_BUCKET',
  messagingSenderId: 'process.env.MESSAGING_SENDER_ID',
  appId: 'process.env.APP_ID',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// 모든 할일 가져오기
export async function fetchTodos() {
  // const q = query(collection(db, 'cities'), where('capital', '==', true));

  // const querySnapshot = await getDocs(q);
  const querySnapshot = await getDocs(collection(db, 'todos'));

  // querySnapshot에 아무것도 없으면 return
  if (querySnapshot.empty) {
    return [];
  }

  const fetchedTodos = [];

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, ' => ', doc.data());

    const aTodo = {
      id: doc.id,
      title: doc.data()['title'],
      is_done: doc.data()['is_done'],
      create_at: doc.data()['created_at'],
    };
    fetchedTodos.push(aTodo);
  });
  return fetchedTodos;
}

module.exports = { fetchTodos };
