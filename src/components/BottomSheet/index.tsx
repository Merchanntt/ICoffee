import React, {createContext, useCallback, useRef, useState} from 'react';
import {Modalize} from 'react-native-modalize' ;
import { GooglePlacesAutocomplete, GooglePlaceData } from 'react-native-google-places-autocomplete';

import { styles } from './styles';

export const ModalizeContext = createContext<ModalizeContextProps>({} as ModalizeContextProps)

interface ModalizeContextProps {
  isOpen(): void;
  modalOpen: boolean
  address: string | undefined;
}

interface ModalizeRefProps {
  open(): boolean;
  closed(): boolean;
}

const BottomSheet: React.FC = ({ children }) => {
  const modalize = useRef<ModalizeRefProps>(null)

  const [address, setAddress] = useState<string | undefined>()
  const [modalOpen, setModalOpen] = useState(false)

  const isOpen = useCallback(() => {
    setModalOpen(true)
    modalize.current?.open()
  }, [])

  const handleSelectedAddress = useCallback((
    data: GooglePlaceData, 
    ) => {
    setAddress(data.structured_formatting.main_text,)
    setModalOpen(false)
    modalize.current?.closed()
  }, [])

  return (
    <ModalizeContext.Provider value={{ isOpen, address, modalOpen }}>
      {children}
      <Modalize
        ref={modalize}
        modalHeight={600}
        snapPoint={600}
        modalStyle={{paddingHorizontal: 20, paddingTop: 20, flex: 1 }}
        onClose={() => setModalOpen(false)}
      >
        <GooglePlacesAutocomplete 
          query={{
            key: 'AIzaSyBB0Ynr7aF1r8YoU16y3g5K0v_8LQp4BbU',
            language: 'pt-BR'
          }}
          placeholder= 'Escolha o endereço da entrega'
          placeholderTextColor='#88888a'
          styles={{
            textInputContainer: styles.InputContainer,
            textInput: styles.SearchInput
          }}
          onPress= {(data) => handleSelectedAddress(data)}
        />
      </Modalize>
    </ModalizeContext.Provider>
  );
}

export default BottomSheet;