import React from 'react'
import { Label, Item } from 'semantic-ui-react'

const CardComponent = () => (
 <Item.Group>
      <Item>
      <Item.Image src='https://media.guitarcenter.com/is/image/MMGS7/Classic-Spider-Resonator-Sunburst-Squareneck/519190000056862-00-220x220.jpg' />
      <Item.Content>
        <Item.Header as='a'>Guitar</Item.Header>
        <Item.Meta>
          <span className='cinema'>Michael</span>
        </Item.Meta>
        <br/>
        <Item.Description>this is my beautiful guitar</Item.Description>
        <br/>
        <Item.Extra>
          <Label>Music</Label>
          <Label icon='globe' content='Party' />
        </Item.Extra>
      </Item.Content>
    </Item>
</Item.Group>
)
export default CardComponent