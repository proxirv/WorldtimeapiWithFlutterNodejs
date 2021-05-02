import "package:flutter/material.dart";
import 'package:http/http.dart' as http;
import 'dart:async';
import 'dart:convert';

void main() {
  runApp(
    MaterialApp(home: HomePage()),
  );
}

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  var url = Uri.parse('http://127.0.0.1:5050/api/time');
  var data = {};
  var valueTime = "";

  get child => null;

  getTime() async {
    var response = await http.post(url);
    data = json.decode(response.body);
    //print(data['data']);

    setState(() {
      valueTime = data['data'];
    });
  }

  @override
  void initState() {
    super.initState();
    getTime();
  }

  void callTime() {
    getTime();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Api Time'),
        backgroundColor: Colors.black,
      ),
      body: Center(child: Text('Tu fecha y hora es: $valueTime')),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: () async {
          print('Presiono');
          callTime();
        },
        label: const Text('Actualizar'),
        backgroundColor: Colors.green,
      ),
    );
  }
}
