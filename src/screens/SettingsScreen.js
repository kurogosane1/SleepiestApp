import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { useFocusEffect } from "@react-navigation/native";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

function SettingsScreen() {
  const [photo, setPhoto] = useState(null);
  const [user, setUser] = useState();

  return (
    <SafeAreaView style={{ backgroundColor: "#1D005C", flex: 1 }}>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo && (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          )}
          {photo && (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor="#2182BD"
            />
          )}
        </TouchableOpacity>
        <View style={{ padding: 20 }}>
          <Text variant="label" style={{ color: "#ffffff" }}>
            User Name
          </Text>
        </View>
      </AvatarContainer>
      <List.AccordionGroup>
        <List.Accordion
          title={<Text style={{ color: "#ffffff" }}>User Information</Text>}
          id="1">
          <List.Item
            title={<Text style={{ color: "#ffffff" }}>User Name</Text>}
          />
        </List.Accordion>
        <List.Item
          title={<Text style={{ color: "#ffffff" }}>Support/Help</Text>}
          id="2"
        />
        <View>
          <List.Item
            title={<Text style={{ color: "#ffffff" }}>Account Settings</Text>}
            id="3"
            titleStyle={{ color: "#ffffff" }}
          />
        </View>
        <View>
          <List.Item
            title={
              <Text style={{ color: "#ffffff" }}>Login/Create Account</Text>
            }
            id="3"
            style={{ color: "#ffffff" }}
          />
        </View>
      </List.AccordionGroup>
    </SafeAreaView>
  );
}

export default SettingsScreen;
