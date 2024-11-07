import React, { createContext, useContext, useState } from "react";
import { IRequisitionDetails, IJobDetails, IInterViewSettings } from "@src/interface/forms";

interface DataContextType {
  state: {
    requisitionDetails?: IRequisitionDetails;
    jobDetails?: IJobDetails;
    interviewSettings?: IInterViewSettings;
  };
  updateSection: (section: "requisitionDetails" | "jobDetails" | "interviewSettings", data: any) => void;
}

const initialValues: DataContextType["state"] = {
  requisitionDetails: {
    gender: "",
    noOfOpenings: 0,
    requisitionTitle: "",
    urgency: "",
  },
  jobDetails: {
    jobDetails: "",
    jobLocation: "",
    jobTitle: "",
  },
  interviewSettings: {
    interviewDuration: "",
    interviewLanguage: "",
    interviewMode: "",
  },
};
const DataContext = React.createContext<DataContextType | null>(null);


export const useData = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }

  return context;
};

const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<DataContextType["state"]>(initialValues);


  const updateSection = (section: "requisitionDetails" | "jobDetails" | "interviewSettings", data: any) => {
    setState((prevState) => ({
      ...prevState,
      [section]: { ...prevState[section], ...data },
    }));
  };

  return (
    <DataContext.Provider value={{ state, updateSection }}>    
      {children}
    </DataContext.Provider>
  );
};


export default DataProvider;
