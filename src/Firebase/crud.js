import {collection,doc,addDoc,deleteDoc} from 'firebase/firestore';
import {db} from './firebase-config'
const userTodosRef = collection(db,'todos')

export const addTodo = async (todo,userId) => {
    if (todo !== "") {
        await addDoc(userTodosRef,{
            userId,
            todo,
            completed: false,
        });
    }

}

export const  handleDelete = async (id) => {
    await deleteDoc(doc(db,'todos',id))
}

