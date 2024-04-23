import { Highlight } from "@components/Highlight";
import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export function NewGroup(){
    const navigation = useNavigation();
    function handleNew(){
        navigation.navigate('players')
    }
    return(
        <Container>
            <Header showBackButton />
            <Content>
                <Icon />
                <Highlight
                    title="Nova turma"
                    subtitle = 'crie a turma para adicionar pessoas'
                />
                <Input 
                    placeholder="Nome da turma"
                />
                <Button
                    title='Criar'
                    style={{marginTop: 20}}
                    onPress={handleNew}
                />
            </Content>
        </Container>
    )
}