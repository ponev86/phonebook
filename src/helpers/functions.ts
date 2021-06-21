import { IContact } from '../store/contact/types';

export const convertBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = error => {
      reject(error);
    };
  });
};

export const sortingAlpha = (contacts?: IContact[]) => {
  if (!contacts) return [];

  return contacts.sort((a: IContact, b: IContact) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
};

export const filterContacts = (contacts?: IContact[], searchStr?: string) => {
  if (!searchStr) return contacts;

  return (
    (contacts &&
      contacts.filter((itemContact: IContact) => {
        return (
          itemContact.name.toLowerCase().indexOf(searchStr.toLowerCase()) >
            -1 ||
          (itemContact.surname &&
            itemContact.surname.toLowerCase().indexOf(searchStr.toLowerCase()) >
              -1) ||
          (itemContact.email &&
            itemContact.email.toLowerCase().indexOf(searchStr.toLowerCase()) >
              -1) ||
          itemContact.phone.toLowerCase().indexOf(searchStr.toLowerCase()) > -1
        );
      })) ||
    []
  );
};
