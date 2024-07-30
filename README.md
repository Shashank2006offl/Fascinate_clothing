# Fascinate_clothing

**AIM:**

The aim of this project was to design and implement a sticky header with a responsive navigation menu for an e-commerce website. The goals included:

Creating a Sticky Header: Ensure that the header remains fixed at the top of the page when the user scrolls, improving accessibility and user experience.

Responsive Navigation Menu: Align the navigation menu items in a horizontal row, making sure they are visible and functional on various devices.

Visual Enhancements: Add visual improvements, such as borders and hover effects, to enhance the overall look and feel of the header.


**Procedure**

A. Design and Layout

HTML Structure:

Created a header element containing the website logo, navigation menu, and various icons (search, user, cart, menu).
Structured the navigation menu with list items representing different sections (Home, Shop, Products, Page, Docs).
CSS Styling:

Used Flexbox for layout to ensure that the navigation menu items are aligned horizontally and spaced evenly.
Added padding and margins to ensure that elements are visually appealing and not cluttered.
Applied a border to the header to distinguish it from the content below.
```
header {
    position: fixed;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10%;
    border-bottom: 1px solid #ddd; /* Border added */
    background-color: #fff;
}

.navmenu {
    display: flex;
    gap: 20px; /* Space between items */
}

.navmenu li {
    display: flex;
}

.navmenu a {
    color: #2c2c2c;
    font-size: 16px;
    text-transform: capitalize;
    padding: 10px 20px;
    font-weight: 400;
    transition: all .42s ease;
}

.navmenu a:hover {
    color: #ee1c47;
}

.header.sticky {
    background: #fff;
    padding: 20px 10%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid #ddd; /* Border persists */
}

@media (max-width: 768px) {
    .navmenu {
        flex-direction: column; /* Stack menu items vertically on small screens */
        align-items: center;
    }

    .nav-icon {
        display: block; /* Ensure menu icon is visible on mobile */
    }
}
```


**PROGRAM**

/* Program for flipflops and verify its truth table in quartus using Verilog programming. Developed by: RegisterNumber:
*/
~~~
module exp11(out,clk,rstn);
input clk,rstn;
output reg [3:0]out;
always @ (posedge clk)
begin
   if(!rstn)
     out<=0;
   else 
     out <= out+1;
end
endmodule

Developed by : SHASHANK R A(212223220121)
~~~
**RTL LOGIC FOR FLIPFLOPS**
![image](https://github.com/04Varsha/T-FLIPFLOP-POSEDGE/assets/149035374/c1849f12-d68d-46e4-b35f-c16112bcd7d7)

**TIMING DIGRAMS FOR FLIP FLOPS**
![image](https://github.com/04Varsha/T-FLIPFLOP-POSEDGE/assets/149035374/a6a68a6a-18e3-4ef7-894d-00ffd2616a5e)


**TRUTH TABLE**
![image](https://github.com/04Varsha/T-FLIPFLOP-POSEDGE/assets/149035374/26771521-cf86-4fce-ab44-2f3dd40ff1d8)

**RESULTS**
Thus the program executed successfully.
