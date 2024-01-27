import { Genders, User } from "@prisma/client";

export class CreateOwnerDto {
    firstName: string;
    lastName: string;
    gender: Genders;
    birthDate: string;
    phone: string;
    userID: number;
}
