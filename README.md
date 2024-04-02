###### <h1 style="text-align: center;"> Assessment Dashboard: Angular <img src="src/favicon.ico" width="35"/> </h1>

<h2>Project Description:</h2>
<p>
The <b>Assessment Dashboard</b> project is a web application that interacts with the User Assessment API. The application allows users to log in, view their assessment reports, and access administrative features if they have administrative privileges. The API provides endpoints for authentication, retrieving assessment reports, and managing users. The web application's dashboard displays users' assessment reports and provides navigation to an Admin section for managing users.
</p>


[DEMO LINK](http://ViktorBykh.github.io/assessment-dashboard-angular)

<h4>Test Data:</h4>
<h6>Admin Login:</h6>
<ul>
  <li><strong>Email:</strong> admin@deepersignals.com</li>
  <li><strong>Password:</strong> password</li>
</ul>
<h6>User Login:</h6>
<ul>
  <li><strong>Email:</strong> user@deepersignals.com</li>
  <li><strong>Password:</strong> password</li>
</ul>


<h2>Key Features:</h2>
<ol>
  <li>
    <strong>User Authentication:</strong>
    <p>Provides a secure authentication mechanism for users to log in and access their assessment reports.</p>
  </li>
  <li>
    <strong>Role-based Access Control:</strong>
    <p>Implements role-based access control (RBAC) to differentiate between regular users and administrators, allowing admins additional privileges such as managing users.</p>
  </li>
  <li>
    <strong>Dashboard:</strong>
    <p>Presents users with a comprehensive dashboard where they can view their assessment reports.</p>
  </li>
  <li>
    <strong>Assessment Reports:</strong>
    <p>Allows users to access detailed assessment reports, providing insights into various metrics.</p>
  </li>
  <li>
    <strong>Admin Section:</strong>
    <p>Includes a dedicated admin section where administrators can manage users efficiently, enabling user management.</p>
  </li>
  <li>
    <strong>Cross-Origin Resource Sharing (CORS):</strong>
    <p>Allows cross-origin requests from authorized domains, facilitating integration with frontend applications running on different domains.</p>
  </li>
  <li>
    <strong>Error Handling:</strong>
    <p>Implements robust error handling mechanisms to provide informative error messages and handle exceptions gracefully, ensuring a smooth user experience.</p>
  </li>
  <li>
    <strong>Secure Token-based Authentication:</strong>
    <p>Utilizes token-based authentication to ensure secure communication between the client and server, mitigating the risk of unauthorized access and data breaches.</p>
  </li>
</ol>

<h2>Frontend UI:</h2>
<ul>
<li>
<img style="width: 25px; height: 25px; object-fit: cover;" src="src/assets/javascript.png" width="25"/> <b>JavaScript</b>
</li>
<li>
<img style="width: 25px; height: 25px; object-fit: cover;" src="src/assets/typescript.png" width="25"/> <b>TypeScript</b>
</li>
<li>
<img style="width: 25px; height: 25px; object-fit: cover;" src="src/favicon.ico"/> <b>Angular</b>
</li>
<li>
<img style="width: 25px; height: 25px; object-fit: cover;" src="src/assets/bulma.png"/> <b>Bulma</b>
</li>
<li>
<img style="width: 25px; height: 25px; object-fit: cover;" src="src/assets/wt.png"/> <b>Web Token</b>
</li>

<li>
<img style="width: 25px; height: 25px; object-fit: cover;" src="src/assets/html.png"/> <b>HTML</b>
</li>
<li>
<img style="width: 22px; height: 22px; object-fit: cover;" src="src/assets/sass.png"/> <b>Sass</b>
</li>
</ul>

<h5>Description:</h5>
<ol>
<li>The Frontend UI is implemented as a RESTful application, 
offering flexibility using the Angular framework.</li>
<li>Developed secure login for users/admins.</li>
<li>The frontend is developed with JavaScript, TypeScript, HTML, Bulma and Sass.</li>
</ol>

## UI Endpoints <img src="https://em-content.zobj.net/thumbs/160/apple/354/link_1f517.png" width="25"/>

<ol>
  <li>
    <h5>Login Page</h5>
    <ul>
      <li><strong>Endpoint</strong>: <code>/api/login</code></li>
      <li><strong>Method</strong>: <code>POST</code></li>
      <li><strong>Description</strong>: Authenticate an admin or user and generate a web token for authorization.</li>
    </ul>
  </li>
  <li>
    <h5>Dashboard</h5>
    <ul>
      <li><strong>Endpoint</strong>: <code>/api/userassessments</code></li>
      <li><strong>Method</strong>: <code>GET</code></li>
      <li><strong>Description</strong>: Retrieve assessment reports for the logged-in user.</li>
    </ul>
  </li>
  <li>
    <h5>User Assessment Report</h5>
    <ul>
      <li><strong>Endpoint</strong>: <code>/api/userassessments/graph</code></li>
      <li><strong>Method</strong>: <code>GET</code></li>
      <li><strong>Description</strong>: Retrieve graph data for a specific assessment.</li>
    </ul>
  </li>
  <li>
    <h5>Admin Section</h5>
    <ul>
      <li><strong>Endpoint</strong>: <code>/api/users</code></li>
      <li><strong>Method</strong>: <code>GET</code></li>
      <li><strong>Description</strong>: Retrieve a list of users for administrative purposes.</li>
    </ul>
  </li>
</ol>
