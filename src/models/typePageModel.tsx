export interface TypePageModel {
  Questions_ID: number;
  page_type: string;
  page_name: string;
  page_level: number;
  question_type: string;
  question_txt?: string;
  selection_txt?: [string[]];
  first_picker_type?: string;
  first_line_txt?: string;
  second_picker_type?: string;
  second_line_txt?: string;
  third_picker_type?: string;
  third_line_txt? : string;
  img_path? : string;
  max_level : number;
}

//questiontxt, selectiontxt, pickertype -> array? object? string? any?
