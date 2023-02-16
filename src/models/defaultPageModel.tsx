export interface defaultPageModel {
  id: number;
  pgLevel: number;
  questionType: string;
  questionTxt: any;
  selectionTxt: string[] | null;
  firstPickerType: any;
  firstlineTxt: any;
  secondPickerType: any;
  secondlineTxt: any;
  thirdPickerType: any;
  thirdlineTxt: any;
  nextpage: string;
}

//questiontxt, selectiontxt, pickertype -> array? object? string? any?
