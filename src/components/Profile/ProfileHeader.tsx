import React, { useState, useRef } from "react";
import NextImage from "next/image";
import { Camera, Edit } from "lucide-react";
import { Button } from "../ui/button";
import ProfilePhotoEditModal from "./ProfilePhotoEditModal";

interface ProfileHeaderProps {
  coverPhoto: string;
  profilePhoto: string;
  username: string;
  handle: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  coverPhoto,
  profilePhoto,
  username,
  handle,
}) => {
  const [currentCoverPhoto, setCurrentCoverPhoto] = useState(coverPhoto);
  const [currentProfilePhoto, setCurrentProfilePhoto] = useState(profilePhoto);
  const [isEditingCover, setIsEditingCover] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [tempCoverPhoto, setTempCoverPhoto] = useState<string | null>(null);
  const [tempProfilePhoto, setTempProfilePhoto] = useState<string | null>(null);

  const coverPhotoInputRef = useRef<HTMLInputElement>(null);
  const profilePhotoInputRef = useRef<HTMLInputElement>(null);

  const handleCoverPhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempCoverPhoto(reader.result as string);
        setIsEditingCover(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfilePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempProfilePhoto(reader.result as string);
        setIsEditingProfile(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveCoverPhoto = (croppedImageUrl: string) => {
    setCurrentCoverPhoto(croppedImageUrl);
    setIsEditingCover(false);
    setTempCoverPhoto(null);
  };

  const handleSaveProfilePhoto = (croppedImageUrl: string) => {
    setCurrentProfilePhoto(croppedImageUrl);
    setIsEditingProfile(false);
    setTempProfilePhoto(null);
  };

  return (
    <div className="relative">
      <div className="h-48 md:h-64 relative">
        <NextImage
          src={currentCoverPhoto}
          alt="Cover Photo"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        <Button
          className="absolute top-4 right-4 bg-background bg-opacity-50 hover:bg-opacity-70"
          onClick={() => coverPhotoInputRef.current?.click()}
        >
          <Edit size={20} />
        </Button>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="relative">
            <NextImage
              src={currentProfilePhoto}
              alt="Profile Photo"
              width={128}
              height={128}
              className="rounded-full border-4 border-background"
            />
            <Button
              className="absolute bottom-0 right-0 rounded-full p-2 bg-background hover:bg-opacity-70"
              onClick={() => profilePhotoInputRef.current?.click()}
            >
              <Camera size={20} />
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-20 text-center">
        <h1 className="text-2xl font-bold">{username}</h1>
        <p className="text-content">@{handle}</p>
      </div>
      <input
        type="file"
        ref={coverPhotoInputRef}
        onChange={handleCoverPhotoChange}
        className="hidden"
        accept="image/*"
      />
      <input
        type="file"
        ref={profilePhotoInputRef}
        onChange={handleProfilePhotoChange}
        className="hidden"
        accept="image/*"
      />
      <ProfilePhotoEditModal
        isOpen={isEditingCover}
        onClose={() => {
          setIsEditingCover(false);
          setTempCoverPhoto(null);
        }}
        imageUrl={tempCoverPhoto || currentCoverPhoto}
        onSave={handleSaveCoverPhoto}
        aspectRatio={16 / 9}
      />
      <ProfilePhotoEditModal
        isOpen={isEditingProfile}
        onClose={() => {
          setIsEditingProfile(false);
          setTempProfilePhoto(null);
        }}
        imageUrl={tempProfilePhoto || currentProfilePhoto}
        onSave={handleSaveProfilePhoto}
        aspectRatio={1}
      />
    </div>
  );
};

export default ProfileHeader;