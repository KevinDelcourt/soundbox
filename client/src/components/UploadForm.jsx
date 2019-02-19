import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Col } from 'reactstrap';
import { getBaseUrl } from '../modules/axios_functions'

export default class UploadForm extends React.Component {

    url = getBaseUrl()

    render = () => 
        <Container>
            <Form action={this.url+"add_sound.php"} method="post" encType="multipart/form-data">
                <FormGroup>
                    <Label for="name[0]">Filename</Label>
                    <Input type="text" name="name[0]" placeholder="Enter name here" />
                </FormGroup>

                <FormGroup>
                    <Label for="file[0]">Sound</Label>
                    <Input type="file" name="file[0]" />
                    <FormText color="muted">
                        mp3 only
                    </FormText>
                </FormGroup>

                <FormGroup>
                    <Label for="name[1]">Filename</Label>
                    <Input type="text" name="name[1]" placeholder="Enter name here" />
                </FormGroup>

                <FormGroup>
                    <Label for="file[1]">Sound</Label>
                    <Input type="file" name="file[1]" />
                    <FormText color="muted">
                        mp3 only
                    </FormText>
                </FormGroup>

                <Button type="submit">Submit</Button>
            </Form>
        </Container>

}