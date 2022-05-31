import * as Styles from '../components/StyledComponents/DeleteArticleBtnStyles';

type TBtnStyles = {
  mrgTop: string;
  text?: string;
  height?: string;
  align?: string;
  onClick?: (e: React.SyntheticEvent) => void;
}

function DeleteArticleBtn (props: TBtnStyles) {

  return(
    <Styles.button onClick={props.onClick} mrgTop={props.mrgTop} height={props.height} align={props.align}>
      {props.text}
    </Styles.button>
  )
}

export default DeleteArticleBtn;
