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
import { PrivateRouter } from '../../../HOC/PrivateRouter';
import { useAuth } from '../../../contexts/AuthContext';

const EditUser = () => {
  const router = useRouter();
  const { currentUser } = useAuth();

  const [user, setUser] = useState();

  const [profilePicState, setProfilePicState] = useState('');
  // review

  useEffect(() => {
    const handleFetching = async () => {
      setUser(await getUserDetail(currentUser.uid));
    };

    if (currentUser.uid) {
      handleFetching();
    }
  }, [currentUser]);

  if (!user) {
    return <Loader />;
  }

  const { name, surname, username, bio, profilePic } = user;

  const handleImageChange = (e) => {
    setProfilePicState(e.target.value);
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      uid: currentUser.uid,
      name: e.target.name.value,
      surname: e.target.surname.value,
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
              src={profilePicState || profilePic || imgPlaceholder}
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
              value={profilePicState || profilePic}
              onChange={handleImageChange}
            />
          </div>
          <div className="flex-1">
            <FormInput
              id="name"
              labelClassName="mt-6 mb-1 block text-sm text-stone-700"
              className="mb-4 block w-full border-b-2 border-stone-300 bg-light-50 p-2"
              label="Jméno:"
              defaultValue={name || ''}
            />
            <FormInput
              id="surname"
              labelClassName="mt-6 mb-1 block text-sm text-stone-700"
              className="mb-4 block w-full border-b-2 border-stone-300 bg-light-50 p-2"
              label="Příjmení:"
              defaultValue={surname || ''}
            />

            <FormTextarea
              id="bio"
              labelClassName="my-1 mt-6 block text-sm text-stone-700"
              className="mb-6 w-full border-b-2 border-stone-300 bg-light-50 p-2"
              label="Bio:"
              rows="4"
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
