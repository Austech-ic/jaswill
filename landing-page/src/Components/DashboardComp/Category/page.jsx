import React, { useState } from 'react';
import styles from './cat.module.css'
import { HiHome } from 'react-icons/hi';
import { AiFillDelete } from 'react-icons/ai';
import ButtonTwo from '@/Components/ButtonTwo/button';
import CatModal from './Cat_Modal/index'
import CatSuccess from './Cat_success/page'


const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [counter, setCounter] = useState(1)


  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const openNewModal = () => {
    setIsNewModalOpen(!isNewModalOpen);
  };


 
 

  return (
    <div className={styles.main}>
    <div className={styles.home}>
      <HiHome />
      <p>Dashboard / Real Estate / Properties</p>
    </div>

    <div>
      <ButtonTwo onClick={openNewModal} />
     
    </div>
    <CatModal show={isNewModalOpen} handleClose={openNewModal} />
    <CatSuccess counter={counter} />
  
   
  </div>
  )
}

export default Page