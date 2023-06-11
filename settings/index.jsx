let setColor = false;
registerSettingsPage(({ settings }) => (
  <Page>
    <Section
      title={
        <Text bold align="center">
          Digital Matrix Settings
        </Text>
      }
    >

      {
        setColor = settings.toggle
      }

      <TextInput
        label="Enter your name"
        settingsKey="name"
        placeholder="Your name"
        maxLength={2}
        value={settings.name}
      />

      <Toggle
        settingsKey="toggle"
        label="Use Custom Color"
        onChange={(value) => {
          setColor = value;
        }}
      />

      {
        setColor && (
          <ColorSelect
            settingsKey="color"
            colors={[
              { color: '#FF0000' },
              { color: '#00FF00' },
              { color: '#0000FF' },
              { color: '#FFFF00' },
              { color: '#00FFFF' },
              { color: '#FF00FF' },
              { color: '#FFFFFF' },
              { color: '#000000' },
            ]}
          />
        )
      }
    </Section>
  </Page>
));
