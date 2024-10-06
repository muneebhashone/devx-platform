import React, { useState, useRef, useCallback } from "react";
import NextImage from "next/image";
import { Camera, Edit, X } from "lucide-react";
import { Button } from "../ui/button";
import Cropper from "react-easy-crop";
import { Area } from "react-easy-crop";
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
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [coverPhotoFile, setCoverPhotoFile] = useState<File | null>(null);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [tempProfilePhoto, setTempProfilePhoto] = useState<string | null>(null);

  const coverPhotoInputRef = useRef<HTMLInputElement>(null);
  const profilePhotoInputRef = useRef<HTMLInputElement>(null);

  const handleCoverPhotoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setCoverPhotoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setCurrentCoverPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
      setIsEditingCover(true);
    }
  };

  const handleProfilePhotoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
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

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const getCroppedImage = useCallback(async () => {
    if (!coverPhotoFile || !croppedAreaPixels) return null;

    const canvas = document.createElement("canvas");
    const image = new Image();
    image.src = URL.createObjectURL(coverPhotoFile);

    await new Promise((resolve) => {
      image.onload = resolve;
    });

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.drawImage(
        image,
        croppedAreaPixels.x * scaleX,
        croppedAreaPixels.y * scaleY,
        croppedAreaPixels.width * scaleX,
        croppedAreaPixels.height * scaleY,
        0,
        0,
        croppedAreaPixels.width,
        croppedAreaPixels.height
      );
    }

    return new Promise<string>((resolve) => {
      canvas.toBlob((blob) => {
        if (blob) {
          const croppedImageUrl = URL.createObjectURL(blob);
          resolve(croppedImageUrl);
        }
      }, "image/jpeg");
    });
  }, [coverPhotoFile, croppedAreaPixels]);

  const handleSaveCoverPhoto = useCallback(async () => {
    const croppedImageUrl = await getCroppedImage();
    if (croppedImageUrl) {
      setCurrentCoverPhoto(croppedImageUrl);
      setIsEditingCover(false);
    }
  }, [getCroppedImage]);

  const handleSaveProfilePhoto = (croppedImageUrl: string) => {
    setCurrentProfilePhoto(croppedImageUrl);
    setIsEditingProfile(false);
    setTempProfilePhoto(null);
  };

  return (
    <div className="relative">
      <div className="h-48 md:h-64 relative">
        {isEditingCover ? (
          <div className="absolute inset-0">
            <Cropper
              image={currentCoverPhoto}
              crop={crop}
              zoom={zoom}
              aspect={16 / 9}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
        ) : (
          <NextImage
            src={currentCoverPhoto}
            alt="Cover Photo"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        )}
        <Button
          className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70"
          onClick={() =>
            isEditingCover
              ? setIsEditingCover(false)
              : coverPhotoInputRef.current?.click()
          }
        >
          {isEditingCover ? <X size={20} /> : <Edit size={20} />}
        </Button>
        {isEditingCover && (
          <div className="absolute bottom-4 right-4 space-x-2">
            <Button onClick={() => coverPhotoInputRef.current?.click()}>
              Change Cover
            </Button>
            <Button onClick={handleSaveCoverPhoto}>Save</Button>
            <Button onClick={() => setIsEditingCover(false)}>Cancel</Button>
          </div>
        )}
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
              className="absolute bottom-0 right-0 rounded-full p-2 bg-gray-900 hover:bg-gray-800"
              onClick={() => profilePhotoInputRef.current?.click()}
            >
              <Camera size={20} />
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-20 text-center">
        <h1 className="text-2xl font-bold">{username}</h1>
        <p className="text-gray-500">@{handle}</p>
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
        isOpen={isEditingProfile}
        onClose={() => {
          setIsEditingProfile(false);
          setTempProfilePhoto(null);
        }}
        imageUrl={tempProfilePhoto || currentProfilePhoto}
        onSave={handleSaveProfilePhoto}
      />
    </div>
  );
};

export default ProfileHeader;
