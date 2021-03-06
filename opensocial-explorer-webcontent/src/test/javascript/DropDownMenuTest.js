/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
define(['explorer/widgets/DropDownMenu', 'explorer/widgets/MenuItemWidget'], function(DropDownMenu, MenuItemWidget){
  describe('A DropDownMenu widget', function() {
    it("can add a menu item", function() {
      var dropDownMenu = new DropDownMenu();
      dropDownMenu.startup();
      var menuItem = new MenuItemWidget({"name" : "Test Menu"});
      menuItem.startup();
    
      dropDownMenu.addMenuItem(menuItem);
      expect(dropDownMenu.getMenuItem('Test Menu')).toEqual(menuItem);
    });
  
    it("can clear a menu item", function() {
      var dropDownMenu = new DropDownMenu();
      dropDownMenu.startup();
      var menuItem = new MenuItemWidget({"name" : "Test Menu"});
      menuItem.startup();
    
      dropDownMenu.addMenuItem(menuItem);
      expect(dropDownMenu.menuItems.length).toBe(1);
      dropDownMenu.clearMenuItems();
      expect(dropDownMenu.menuItems.length).toBe(0);
    });
  });
});