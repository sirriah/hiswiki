import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Loader } from '../../components/Loader';
import { Layout } from '../../components/Layout';
import { getUserDetail } from '../../firebase/api/users';
import { useAuth } from '../../contexts/AuthContext';
import { getAllArticlesFromUser } from '../../firebase/api/articles';
import imgPlaceholder from '../../public/img/img_placeholder_user.webp';

const UserProfile = () => {
  const router = useRouter();
  const { userID } = router.query;
  const { currentUser } = useAuth();

  const [user, setUser] = useState();
  const [listOfArticles, setListOfArticles] = useState([]);

  useEffect(() => {
    const handleFetching = async () => {
      setUser(await getUserDetail(userID));
      setListOfArticles(await getAllArticlesFromUser(userID));
    };

    if (userID) {
      handleFetching();
    }
  }, [userID]);

  if (!user) {
    return <Loader />;
  }

  const { profilePic, bio, username } = user;

  return (
    <Layout>
      {userID === currentUser?.uid && (
        <p className="block-inline text-right text-blue-600 underline">
          <Link href={`/user/edit/${currentUser.uid}`}>
            <a>Editovat</a>
          </Link>
        </p>
      )}

      <div className="mx-auto flex max-w-[800px] gap-12">
        <div className="">
          <div className="relative block h-[200px] w-[200px]">
            <Image
              src={profilePic || imgPlaceholder}
              layout="fill"
              className="relative block rounded-full"
              objectFit="cover"
            />
          </div>
        </div>
        <div>
          <h1 className="headline--1 underline-large">
            {user?.firstName && user?.lastName
              ? `${user.firstName} ${user.lastName}`
              : username}
          </h1>
          <p className="py-4">{bio}</p>
          <h2 className="headline--3 pt-5">Články:</h2>
          <ul className="ml-4 pb-14">
            {listOfArticles.map(({ id, link, dateOfPublication, title }) => (
              <li className="list-disc py-2" key={id}>
                <p>
                  <Link href={`/article/${link}`}>
                    <a className="link">{title}</a>
                  </Link>{' '}
                  -- {dateOfPublication}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;
