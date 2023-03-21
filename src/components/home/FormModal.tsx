import styled from 'styled-components'

type Props = {
  visible: boolean
  title: string
  onOk: () => void
  onCancel: () => void
  children: React.ReactNode
}

const FormModal = ({ visible, title, onOk, onCancel, ...props }: Props) => {
  return (
    <>
      {visible && (
        <FormModalContainer>
          <div
            className="modal-mask"
            onClick={onCancel}></div>
          <div className="modal-container">
            <div className="modal-header">
              <div className="modal-title">{title}</div>
            </div>
            <div className="modal-body">{props.children}</div>
            <div className="modal-footer">
              <button
                className="modal-cancel-btn btn"
                onClick={onCancel}>
                取消
              </button>
              <button
                className="btn"
                onClick={onOk}>
                新增
              </button>
            </div>
          </div>
        </FormModalContainer>
      )}
    </>
  )
}

const FormModalContainer = styled.div`
  .modal-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: black;
    opacity: 0.6;
    z-index: 1000;
  }

  .modal-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    min-width: 500px;
    border-radius: 4px;
    z-index: 1001;
  }

  .modal-title {
    padding: 30px;
    color: black;
    font-size: 20px;
    border-bottom: 1px solid #e8e8e8;
  }

  .modal-body {
    padding: 30px;
    font-size: 14px;
    border-bottom: 1px solid #e8e8e8;
  }

  .modal-footer {
    text-align: center;
    padding: 30px;
    display: flex;

    & .btn {
      flex: 1;
      height: 32px;
      text-align: center;
      margin: 0 12px;
      border: none;

      &:hover {
        cursor: pointer;
      }
    }

    .modal-cancel-btn {
      background-color: #ff4d4d;
    }
  }
`

export default FormModal
