interface NurseDetails {
  nurse_id: number;
  name: string;
  photograph?: string;
  email?: string;
  isRoundingManager: boolean;
  workingDays: number;
  dutyStartTime: string;
  dutyEndTime: string;
  user_id: number | undefined;
  address: string;
  contact: string;
}

export default NurseDetails;

export type NurseToInsert = Omit<NurseDetails, "nurse_id">;
