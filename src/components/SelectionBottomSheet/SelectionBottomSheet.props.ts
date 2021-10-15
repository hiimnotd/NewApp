export interface SelectionBottomSheetOption {
  id: number;
  name: string;
}

export interface SelectionBottomSheetProps {
  data: Array<SelectionBottomSheetOption>;

  txTitle: string;

  selectedOption: SelectionBottomSheetOption;

  onSave: (selectedOption: SelectionBottomSheetOption) => void;
}
