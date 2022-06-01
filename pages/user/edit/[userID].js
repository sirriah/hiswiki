import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { Loader } from '../../../components/Loader';
import { Layout } from '../../../components/Layout';
import { getUserDetail } from '../../../firebase/api/users';
import { FormInput } from '../../../components/Form/FormInput';
import { FormTextarea } from '../../../components/Form/FormTextarea';
import imgPlaceholder from '../../../public/img/img_placeholder_user.webp';
import { editUserProfile } from '../../../firebase/api/users';
import { PrivateRouter } from '../../../components/PrivateRouter';
import { useAuth } from '../../../contexts/AuthContext';

const EditUser = () => {
  const router = useRouter();
  const { currentUser } = useAuth();

  const [user, setUser] = useState();
  const [profilePicState, setProfilePicState] = useState('');

  useEffect(() => {
    const handleFetching = async () => {
      const data = await getUserDetail(currentUser.uid);
      setUser(data);
      setProfilePicState(data.profilePic);
    };

    if (currentUser.uid) {
      handleFetching();
    }
  }, [currentUser]);

  if (!user) {
    return <Loader />;
  }

  const { firstName, lastName, username, bio } = user;

  const handleImageChange = (e) => {
    setProfilePicState(e.target.value);
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      uid: currentUser.uid,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      bio: e.target.bio.value,
      profilePic: e.target.profileImage.value,
    };

    await editUserProfile(formData);

    router.push('/');
  };

  return (
    <PrivateRouter>
      <Layout>
        <h1 className="headline--1 pl-0">Editace uživatele {username}</h1>

        <form
          onSubmit={formSubmit}
          className="flex flex-col justify-between gap-4 md:flex-row"
        >
          <div className="w-full md:w-64">
            <Image
              src={profilePicState || imgPlaceholder}
              width="200"
              height="200"
              alt="avatar"
            />

            <FormInput
              labelClassName="my-1 mt-6 block text-sm text-stone-700"
              className="mb-6 box-border block w-full border-b-2 border-stone-300 bg-light-50 p-2"
              id="profileImage"
              label="Hlavní obrázek - URL"
              type="text"
              value={profilePicState || ''}
              onChange={handleImageChange}
            />
          </div>
          <div className="flex-1">
            <FormInput
              id="firstName"
              labelClassName="mt-6 mb-1 block text-sm text-stone-700"
              className="mb-4 block w-full border-b-2 border-stone-300 bg-light-50 p-2 lg:w-80"
              label="Jméno:"
              defaultValue={firstName || ''}
            />
            <FormInput
              id="lastName"
              labelClassName="mt-6 mb-1 block text-sm text-stone-700"
              className="mb-4 block w-full border-b-2 border-stone-300 bg-light-50 p-2 lg:w-80"
              label="Příjmení:"
              defaultValue={lastName || ''}
            />

            <FormTextarea
              id="bio"
              labelClassName="my-1 mt-6 block text-sm text-stone-700"
              className="mb-6 w-full border-b-2 border-stone-300 bg-light-50 p-2"
              label="Bio:"
              rows="6"
              defaultValue={bio || ''}
            />
            <button
              className="my-4 rounded-md border-b-4 border-b-accent-600 bg-accent-500 px-10 py-3 text-white transition-colors hover:border-accent-500 hover:bg-accent-600"
              type="submit"
            >
              Odeslat
            </button>
          </div>
        </form>
      </Layout>
    </PrivateRouter>
  );
};
export default EditUser;
