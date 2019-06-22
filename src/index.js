import React from 'react';
import ReactDOM from 'react-dom'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'
const App=()=>{
    return  <div class="ui segment">
    {/* <div><h3 class="ui header">Section One</h3></div>
    <div class="ui hidden divider"></div>
    <div class="ui link cards">
    <div class="card">
      <div class="image">
        <img src="https://cdn.shopify.com/s/files/1/1403/7343/products/665_9560_1600x.jpg?v=1548286878"/>
      </div>
      <div class="content">
        <div class="header">Tandem Bicycle</div>
        <div class="meta">
          <a>Michael</a>
        </div>
        <div class="description">
          Vintage Bycicle in great shape
        </div>
        <br/>
        <div class="ui purple horizontal label">Outdoors</div>
      </div>
      <div class="extra content">
        <span class="right floated">
          Available
        </span>
        <span>
          <i class="user icon"></i>
          Request to borrow
        </span>
      </div>
    </div>
    <div class="card">
      <div class="image">
        <img src="https://pianopiano.com/wp-content/uploads/2015/08/yamaha_upright_piano_for_rent_pianopiano-1000x1006.jpg?071818"/>
      </div>
      <div class="content">
        <div class="header">Standup Piano</div>
        <div class="meta">
          <span class="date">Michael</span>
        </div>
        <div class="description">
          Piano in good condition. Please take care and no drinks on top or nearby :)
        </div>
        <br/>
        <div class="ui purple horizontal label">Music</div><div class="ui purple horizontal label">Party</div>
      </div>
      <div class="extra content">
         
        <span class="right floated">
        Available
        </span>
        <span>
          <i class="user icon"></i>
          Request to borrow
        </span>
      </div>
    </div>
    <div class="card">
      <div class="image">
        <img src="https://media.guitarcenter.com/is/image/MMGS7/Classic-Spider-Resonator-Sunburst-Squareneck/519190000056862-00-220x220.jpg"/>
      </div>
      <div class="content">
        <div class="header">Resonator</div>
        <div class="meta">
          <a>Michael</a>
        </div>
        <div class="description">
          My beautiful guitar! Treat it good!
        </div>
      </div>
      <div class="extra content">
        <span class="right floated">
        Unavailable
        </span>
        <span>
          <i class="user icon"></i>
          Request To Borrow
        </span>
      </div> */}
      <Item>
      <Item.Image src='https://media.guitarcenter.com/is/image/MMGS7/Classic-Spider-Resonator-Sunburst-Squareneck/519190000056862-00-220x220.jpg' />

      <Item.Content>
        <Item.Header as='a'>Guitar</Item.Header>
        <Item.Meta>
          <span className='cinema'>Michael</span>
        </Item.Meta>
        <br/>
        <Item.Description>this is my beautiful guitalr</Item.Description>
        <br/>
        <Item.Extra>
          <Label>Music</Label>
          <Label icon='globe' content='Party' />
        </Item.Extra>
      </Item.Content>
    </Item>
  </div>

  
}

ReactDOM.render(<App/>, document.querySelector('#root'))