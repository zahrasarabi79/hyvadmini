// api response
export interface IpassengersApiResponse {
  id: number;
  passenger: string;
  contractId: number;
}
export interface IReportApiResponse {
  id: number;
  number: number;
  costTitle: string;
  presenter: string;
  datepayment: string;
  payments: string;
  bank: string;
  contractId: number;
}
export interface IContractApiResponse {
  id: number;
  typeReport: string;
  dateContract: string;
  numContract: string;
  passengers: IpassengersApiResponse[];
  report: IReportApiResponse[];
}
// data
export interface IContract {
  dateContract: string;
  numContract: string;
  passengers: string[];
  typeReport: string;
  report: IReport[];
}
export interface IReport {
  number: string;
  costTitle: string;
  presenter: string;
  datepayment: string;
  payments: string;
  bank: string;
  [index: string]: string;
}
export interface IPassenger {
  passenger: string;
}

// error
export interface IReportError {
  number: boolean;
  costTitle: boolean;
  presenter: boolean;
  datepayment: boolean;
  payments: boolean;
  bank: boolean;
  [index: number | string]: boolean;
}
// props component
export interface IContractInfoInputs {
  contract: IContract;
  setContract: React.Dispatch<React.SetStateAction<IContract>>;
  setNumContractError: React.Dispatch<React.SetStateAction<boolean>>;
  numContractError: boolean;
  setDateContractError: React.Dispatch<React.SetStateAction<boolean>>;
  dateContractError: boolean;
}

export interface IPassengersInputs {
  contract: IContract;
  updateContract: (updatedContract: IContract) => void;
  setPassengersError: React.Dispatch<React.SetStateAction<boolean>>;
  passengersError: boolean;
}

export interface IBuySellInformation {
  report: IReport[];
  setReport: React.Dispatch<React.SetStateAction<IReport[]>>;
  contract: IContract;
  updateContract: (updatedContract: IContract) => void;
  reportError: IReportError[];
  setReportError: React.Dispatch<React.SetStateAction<IReportError[]>>;
}

export interface IReportCard {
  contract: IContract;
  report: IReport[];
  setReport: React.Dispatch<React.SetStateAction<IReport[]>>;
  updateContract: (updatedContract: IContract) => void;
  reportError: IReportError[];
  setReportError: React.Dispatch<React.SetStateAction<IReportError[]>>;
}
export interface IReportcomponent {
  key: number;
  index: number;
  item: IReport;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, index: number, value: string) => void;
  setReport: React.Dispatch<React.SetStateAction<IReport[]>>;
  reportError: IReportError;
}
export interface IContractInformations {
  contract: IContractApiResponse;
}
export interface IPassengersInfo {
  passengers: IpassengersApiResponse[];
}
export interface IReportsInfo {
  reports: IReportApiResponse[];
}
export interface IShowReportComponenet {
  report: IReportApiResponse;
}
// log in
export interface Token {
  token: string;
}
export interface IUser {
  username: string | null | File;
  password: string | null | File;
}
