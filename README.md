Certification network is a hyperledger fabric blockchain network which allows universities to issue and store certificates to its students.
Below are the functionalities of the network:
1. Universities can register a student in its database
2. University can issue certificates to registered students
3. Employers can verify the certificates of their candidates
4. Regulator of the network has full control of the network

Below are the organisations in this sample network
1. IIT - University which can register students and issue certificates
2. Aakash - Student of IIT (not an organisation)
3. Upgrad - Employer (company interested to employ Aakash)
4. MHRD - Regulatory authority of the network

Every organisation has 2 peers and the chaincode is installed in peer0 of each organisation.
There is only one orderer in the network
There is only one channel in the network
Every organisation has its own CA
The client side application is in the folder certification-network/application

How to start the network: 
0. Run npm install inside application and chaincode folder - package.json files are defined inside for dependencies

1. Open terminal inside certification-network/network and enter: ./fabricNetwork.sh up
This will start the network, generate crypto-config files and docker container files

2. Now enter: ./fabricNetwork.sh install
This will install and instantiate the chaincode on peer0 of all organisation and instantitate on MHRD's peer. 

3. Now inside certification-network/application directory, enter: node .
This will start the node application on localhost:3000  

4. Finally open the index.html file inside certification-network/application/client directory to open the client application

5. Copy the path of file inside directory 
Certificate File Inside: certification-network/network/crypto-config/peerOrganizations/mhrd.certification-network.com/users/Admin@mhrd.certification-network.com/msp/signcerts/
Private Key File inside: certification-network/network/crypto-config/peerOrganizations/mhrd.certification-network.com/users/Admin@mhrd.certification-network.com/msp/keystore/

6. Done. Play with network by adding new students and issuing them certificates - and verifying the certs by adding the hash


