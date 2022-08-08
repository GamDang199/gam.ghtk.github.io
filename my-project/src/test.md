<!-- <a-layout>
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, background: 'white', borderRight: '1px solid grey', width: '25vw'}">
        <h1>Cần xử lý</h1>
        <a-menu mode="inline" v-model:selectedKeys="selectedKeys" v-for="item in menu">
          <a-menu-item key="" :style="{ borderTop: '1px solid grey'}">
            
            <span class="nav-text">{{item.name}}</span>
          </a-menu-item>
        </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header :style="{ background: '#fff', paddingTop: '25px', paddingBottom: '25px' }">
        <div class="flex justify-around">
          <g-button title="Xe tai" :data="data.truck"/>
          <g-button title="Tai xe" :data="data.drivers"/>
          <g-button title="Kho" :data="data.warehouse"/>
          <g-button title="Van de camera" :data="data.problemCamera"/>
          <g-date-picker />
          <g-search />
        </div>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <div :style="{ padding: '24px', background: '#fff', textAlign: 'center' }">
          
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center', position: 'fixed', bottom: 0, width: '100%' }">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
     
  </a-layout> -->