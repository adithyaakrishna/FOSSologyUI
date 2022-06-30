/*
 Copyright (C) 2021 Aman Dwivedi (aman.dwivedi5@gmail.com), Shruti Agarwal (mail2shruti.ag@gmail.com)

 SPDX-License-Identifier: GPL-2.0

 This program is free software; you can redistribute it and/or
 modify it under the terms of the GNU General Public License
 version 2 as published by the Free Software Foundation.
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License along
 with this program; if not, write to the Free Software Foundation, Inc.,
 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

import {
  getUserSelfApi,
  getAllUsersApi,
  deleteUserApi,
  addUserApi,
} from "api/users";
import { setLocalStorage } from "shared/storageHelper";

// Fetching the self information
export const getUserSelf = () => {
  return getUserSelfApi().then((res) => {
    setLocalStorage("user", res);
    setLocalStorage("currentGroup", res.default_group);
    return res;
  });
};

// Fetching all the users and returning their complete info
export const getAllUsers = () => {
  return getAllUsersApi().then((res) => {
    return res;
  });
};

// sending user data payload to the API module for creating a new user
export const addUser = (userData) => {
  return addUserApi(userData).then((res) => {
    return res;
  });
};

// Fetching all the users and returning their names
export const getAllUsersName = () => {
  return getAllUsersApi().then((res) => {
    const modifiedUser = [];
    res.forEach((user) => {
      modifiedUser.push({
        id: user?.id,
        name: user?.name,
      });
    });
    return modifiedUser;
  });
};

// Deleting the user info
export const deleteUser = (id) => {
  return deleteUserApi(id).then((res) => {
    return res;
  });
};
