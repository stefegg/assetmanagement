export type ActualData = {
    actualDates: Date[];
    actualData: ActualDataItem[];
  };

export type ActualDataItem = {
    category: string;
    name: string;
    value: number[];
  };
  