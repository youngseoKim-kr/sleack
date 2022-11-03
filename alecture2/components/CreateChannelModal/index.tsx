import Modal from '@components/Modal';
import useInput from '@hooks/useInput';
import { Button, Input } from '@pages/SignUp/styles';
import React, { useCallback, useState, VFC } from 'react';

interface Props {
  show: boolean;
  onCloseModal: () => void;
}
const CreateChannelModal: VFC<Props> = ({ show, onCloseModal }) => {
  const [newChannel, onChangeNewChannel] = useInput('');

  const onCreateChannel = useCallback(() => {}, []);

  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <form onSubmit={onCreateChannel}>
        <label id="channel-label">
          <span>워크스페이스 이름</span>
          <Input id="channel" value={newChannel} onChange={onChangeNewChannel} />
        </label>
        <Button type="submit">생성하기</Button>
      </form>
    </Modal>
  );
};

export default CreateChannelModal;
