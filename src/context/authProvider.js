import React, { createContext, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { auth } from '../firebase';
import { chatkitty } from '../chatkitty';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        login: async (email, password) => {
          setLoading(true);

          try {
            const userCredential = await signInWithEmailAndPassword(auth,
              email, password);

            // Người dùng đã đăng nhập thành công
            const currentUser = userCredential.user;

            const result = await chatkitty.startSession({
              username: currentUser.uid,
              authParams: {
                idToken: await currentUser.getIdToken()
              }
            });

            if (result.failed) {
              console.log('Không thể đăng nhập!!!');
            }
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
        },

        register: async (displayName, email, password) => {
          setLoading(true);

          try {
            const userCredential = await createUserWithEmailAndPassword(
              auth, email, password);

            await updateProfile(auth.currentUser, {
              displayName: displayName
            });

            // Signed-in Firebase user
            const currentUser = userCredential.user;

            const startSessionResult = await chatkitty.startSession({
              username: currentUser.uid,
              authParams: {
                idToken: await currentUser.getIdToken()
              }
            });

            if (startSessionResult.failed) {
              console.log('Không thể đăng ký!!!');
            }
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
        },
        logout: async () => {
          try {
            await chatkitty.endSession();
          } catch (error) {
            console.error(error);
          }
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};