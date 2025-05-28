
import { Client, Account, Databases, Storage, Functions } from "react-native-appwrite"
import { variables } from "../variables"


const client = new Client()
  .setEndpoint(variables.endpoint) 
  .setProject(variables.projectID) 

const account = new Account(client)
const databases = new Databases(client)
const storage = new Storage(client)
const functions = new Functions(client)

export async function getCurrentUser(){
  try {
    const currentAccountID = await getAccountID();
    if (!currentAccountID) throw Error;

    const currentUser = await databases.getDocument(
      variables.databaseId,
      variables.userCollectionId,
      currentAccountID
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    return null;
  }
}
export async function getAccountID() {
  try {
    const currentAccount = await account.get();
    return currentAccount.$id;
  } catch (error) {
    throw new Error(error);
  }
}