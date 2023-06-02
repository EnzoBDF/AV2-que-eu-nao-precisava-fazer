import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        // Name of the route to hide.
        name="index"
        options={{
          // This tab will no longer show up in the tab bar.
          href: '/',
        }}
      />
      <Tabs.Screen
        // Name of the route to hide.
        name="Cadastro"
        options={{
          // This tab will no longer show up in the tab bar.
          href: null,
        }}
      />
      <Tabs.Screen
        // Name of the route to hide.
        name="Home"
        options={{
          // This tab will no longer show up in the tab bar.
          href:'Home',
        }}
      />
          <Tabs.Screen
        // Name of the route to hide.
        name="Sobre"
        options={{
          // This tab will no longer show up in the tab bar.
          href: null,
        }}
      />
    </Tabs>
  );
}