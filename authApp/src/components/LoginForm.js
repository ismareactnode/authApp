import React from 'react';
import { TextInput } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

export default class LoginForm extends React.Component{
  render(){
    return(
          <Card>
            <CardSection>
              <TextInput style={{height: 20,width: 100}}/>

            </CardSection>

            <CardSection>

            </CardSection>

            <CardSection>
              <Button>
                Login
              </Button>
            </CardSection>
          </Card>
    );
  };
}
