import React, {createContext, useCallback, useRef, useState} from 'react';
import { Animated } from 'react-native'
import { Modalize } from 'react-native-modalize' ;
import { GooglePlacesAutocomplete, GooglePlaceData } from 'react-native-google-places-autocomplete';

import { styles } from './styles';

export const ModalizeContext = createContext<ModalizeContextProps>({} as ModalizeContextProps)

interface ModalizeContextProps {
  isOpen(): void;
  modalOpen: boolean
  address: string | undefined;
  animated: any;
}

interface ModalizeRefProps {
  open(): boolean;
  close(): boolean;
}

const BottomSheet: React.FC = ({ children }) => {
  const modalize = useRef<ModalizeRefProps>(null)
  const animated = useRef(new Animated.Value(0)).current

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
    modalize.current?.close()
  }, [])

  return (
    <ModalizeContext.Provider value={{ isOpen, address, modalOpen, animated }}>
      {children}
        <Modalize
          ref={modalize}
          panGestureAnimatedValue={animated}
          useNativeDriver
          modalHeight={540}
          onClose={() => setModalOpen(false)}
          modalStyle={{paddingHorizontal: 20, paddingTop: 20, flex: 1 }}
          customRenderer={
            <GooglePlacesAutocomplete 
            query={{
              key: 'AIzaSyBB0Ynr7aF1r8YoU16y3g5K0v_8LQp4BbU',
              language: 'pt-BR'
            }}
            placeholder= 'Escolha o endereço da entrega'
            placeholderTextColor='#88888a'
            enablePoweredByContainer= {false}
            autoFocus
            styles={{
              textInputContainer: styles.InputContainer,
              textInput: styles.SearchInput,
              description: styles.description,
            }}
            onPress= {(data) => handleSelectedAddress(data)}
          />
          }
        />
    </ModalizeContext.Provider>
  );
}

export default BottomSheet;