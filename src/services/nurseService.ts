import fs from "fs";
import cloudinary from "../utils/cloudinary";

import NurseModel from "../models/NurseModel";

import Success from "../domain/Success";
import NurseDetails, { NurseToInsert } from "../domain/Nurse";

/**
 *
 * @param authUser
 * @returns
 */
export const getAllNurses = async (
  authUser: number | undefined
): Promise<Success<NurseDetails[]>> => {
  const nurses = await NurseModel.getAllNurses(authUser);

  return {
    data: nurses,
    message: "Nurses details fetched successfully!",
  };
};

/**
 *
 * @param nurseId
 * @param authUser
 * @returns
 */
export const getNurse = async (
  nurseId: number,
  authUser: number | undefined
): Promise<Success<NurseDetails>> => {
  const nurse = await NurseModel.getNurse(nurseId, authUser);
  return {
    data: nurse,
    message: "Nurse details fetched successfully!",
  };
};

/**
 *
 * @param nurseDetails
 * @returns
 */
export const addNurse = async (
  nurseDetails: NurseToInsert
  // photograph: string
): Promise<Success<NurseDetails>> => {
  try {
    // if (!fs.existsSync(photograph)) {
    //   throw new Error("File not found!");
    // }
    // const uploadResponse = await cloudinary.uploader.upload(photograph, {
    //   resource_type: "image",
    //   use_filename: true,
    //   width: 500,
    //   height: 500,
    //   crop: "limit",
    //   upload_preset: "cloudinary-test",
    // });

    // const url = uploadResponse.url;

    const nurse = await NurseModel.addNurse({
      ...nurseDetails,
      photograph: "test",
      // photograph: url,
    });

    return {
      data: nurse,
      message: "Nurse details added successfully!",
    };
  } catch (error) {
    console.log("error:::", error);
    // fs.unlinkSync(photograph);
    return {
      message: "Cannot add nurse details!",
    };
  } finally {
    // fs.unlinkSync(photograph);
  }
};

/**
 *
 * @param nurseDetails
 * @returns
 */
export const updateNurse = async (
  nurseDetails: NurseDetails
): Promise<Success<NurseDetails>> => {
  try {
    let url = "";
    if (fs.existsSync(nurseDetails.photograph!)) {
      const uploadResponse = await cloudinary.uploader.upload(
        nurseDetails.photograph!,
        {
          resource_type: "image",
          use_filename: true,
          upload_preset: "cloudinary-test",
          width: 500,
          height: 500,
          crop: "limit",
        }
      );
      url = uploadResponse.url;
      fs.unlinkSync(nurseDetails.photograph!);
    }
    if (url !== "") {
      nurseDetails.photograph = url;
    } else {
      delete nurseDetails.photograph;
    }

    const nurse = await NurseModel.updateNurse(nurseDetails);
    return {
      data: nurse,
      message: "Nurse details updated successfully!",
    };
  } catch (error) {
    console.log("error:::", error);
    fs.unlinkSync(nurseDetails.photograph!);
    return {
      message: "Cannot update nurse details!",
    };
  }
};

/**
 *
 * @param nurseId
 * @param authUser
 * @returns
 */
export const removeNurse = async (
  nurseId: number,
  authUser: number | undefined
): Promise<Success<void>> => {
  const nurseDetailsOwner = await NurseModel.checkNurseDetailsOwner(
    nurseId,
    authUser
  );

  if (!nurseDetailsOwner) {
    return {
      message: "Not Authorized!",
    };
  }

  await NurseModel.removeNurse(nurseId, authUser);

  return {
    message: "Nurse details removed successfully!",
  };
};
