import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Duis condimentum augue id magna semper rutrum. Aenean fermentum risus id tortor. Fusce nibh. Nunc dapibus tortor vel mi dapibus sollicitudin. Integer pellentesque quam vel velit. Quisque tincidunt scelerisque libero. Aliquam in lorem sit amet leo accumsan lacinia. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Etiam commodo dui eget wisi. Etiam posuere lacus quis dolor.

Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Aliquam ornare wisi eu metus. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. In rutrum. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Aliquam ornare wisi eu metus. Pellentesque arcu. Aliquam erat volutpat. Mauris elementum mauris vitae tortor. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Quisque tincidunt scelerisque libero. Praesent vitae arcu tempor neque lacinia pretium.

Etiam commodo dui eget wisi. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Maecenas aliquet accumsan leo. Aliquam id dolor. Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel sapien. Fusce suscipit libero eget elit. Aenean placerat. Duis viverra diam non justo. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Proin mattis lacinia justo. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Mauris metus. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Aliquam ornare wisi eu metus. Quisque porta. Ut tempus purus at lorem. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Cras elementum. Nulla pulvinar eleifend sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Duis pulvinar. Nulla est.

Duis condimentum augue id magna semper rutrum. Phasellus et lorem id felis nonummy placerat. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Curabitur sagittis hendrerit ante. Nullam eget nisl. Fusce aliquam vestibulum ipsum. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. In rutrum. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.</Text>
      <StatusBar style="show" />
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scrollView: {
    marginHorizontal: 20,
    marginTop: 40,

  },
  text: {
    fontSize: 42,
  },
});
