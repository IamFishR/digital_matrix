
const colors = [
  { color: '#EC4E20' },
  { color: '#ECB0E1' },
  { color: '#DBFF76' },
  { color: '#58355E' },
  { color: '#EC0B43' },
  { color: '#1A090D' },
  { color: '#1A659E' },
  { color: '#FFFFFF' },
  { color: '#E27396' },
]

const myView = (props) => {
  return (
    <Page>
      <Section
        title={
          <Text bold align="center">
            Digital Matrix Settings
          </Text>
        }
      >
        <TextInput
          label="Enter your name"
          settingsKey="name"
          placeholder="Your name"
          maxLength={2}
          title="Name"
          value={props.name}
        />
        <ColorSelect
          settingsKey="color"
          colors={colors}
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(myView);
