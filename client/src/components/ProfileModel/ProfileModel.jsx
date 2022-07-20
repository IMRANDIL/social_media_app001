import React, { useState } from "react";

import { Modal, useMantineTheme } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ProfileModel({ modalOpen, setModalOpen, user }) {
  const theme = useMantineTheme();

  const [formData, setFormData] = useState(user);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const { userInfo } = useSelector((state) => state.registerUser);
  const dispatch = useDispatch();
  const { id } = useParams();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="45%"
      opened={modalOpen}
      onClose={() => setModalOpen(false)}
    >
      <form className="infoAuth">
        <h3>Your info</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Works At"
            name="worksAt"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Lives In"
            name="livesIn"
          />
          <input
            type="text"
            className="infoInput"
            placeholder="Country"
            name="country"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Relationship Status"
          />
        </div>
        <div>
          Profile Image
          <input type="file" name="ProfileImg" />
          Cover Image
          <input type="file" name="CoverImg" />
        </div>

        <button className="button log-button">Update</button>
      </form>
    </Modal>
  );
}
export default ProfileModel;
