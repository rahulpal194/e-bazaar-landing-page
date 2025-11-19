<template>
     <!--===============================
              HERO PART START 
     =================================-->
     <section class="h-auto w-full pt-26 lg:pt-38 bg-linear-180 from-primary/15 to-white">
        <div class="container">
            <div class="max-w-[934px] w-full mx-auto">
                <h1 class="heading mb-6">Extraordinary<span class="gradient-text"> Features of eBazaar </span>Retail eCommerce Business Solution</h1>
                <p class="text-base lg:text-lg font-normal text-center lg:px-24 mb-8 sm:mb-6">FoodKing is packed with the tools that keep your restaurant running smooth and growing your business fast. Manage orders, deliveries, dine-in, inventory, staff, and more from one powerful system. Whether you run a small café or a multi-branch restaurant, FoodKing scales with your business.</p>
            </div>
            <div class="flex gap-5 sm:gap-6 items-center justify-center mb-12 sm:mb-16">
                <button class="primary-button relative z-20">Buy Now</button>
                <button class="button">Explore Demo</button>
            </div>
        </div>
     </section>
     <!--==============================
               HERO PART END 
     =================================-->

    <!--===============================
           KEY FEATURES PART START 
     =================================-->
     <section class="container">
        <div class="mb-20 sm:mb-40">
            <div class="sticky top-20 lg:top-24 z-10">
                <div class="max-w-[997px] w-full mx-auto relative p-4 mb-12 bg-white rounded-full">
                    <nav class="flex justify-between overflow-x-auto scrollbar-hide">
                        <button 
                            type="button" 
                            v-for="featureTab in featureTabs"
                            @click="handleTab(featureTab.id)"
                            :key="featureTab.id"
                            :class="featureTab.id === featureActive ? 'active' : ''"
                            class="navbtn !px-6">
                            <i :class="[featureActive === featureTab.id? 'text-white': '', featureTab.icon]" class="text-xl text-[#818B9B]"></i>
                            <span>{{ featureTab.name }}</span>
                        </button>
                    </nav>
                    <div class="navgradientBg"></div>
                    <div class="blur-rect"></div>
                </div>
            </div>
            <div v-if="featureActive == 1" class="tab-content mb-12 md:mb-16">
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 pt-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Admin Dashboard</h3>
                                <p class="text-base font-normal overflow-ellipsis">The dashboard shows real-data where the admin can see business analytics, order statistics, sales summary, orders summary, most popular items and so on.</p>
                            </div>
                            <NuxtImg class="max-w-[414px] w-full h-[286px]" src="/images/features/admin-panel/admin-panel-1.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Restaurants List</h3>
                                <p class="text-base font-normal">View and manage all registered restaurants in one place — check details, update info, and keep everything organized easily.</p>
                            </div>
                            <NuxtImg class="h-[185px] w-full" src="/images/features/admin-panel/admin-panel-2.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 h-full">
                            <div class="flex-auto">
                                <h3 class="text-2xl font-bold mb-4">Offer Setup</h3>
                                <p class="text-base font-normal">Create and manage exclusive offers or discounts for restaurants and customers to boost sales and engagement effortlessly.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[166px] w-full" src="/images/features/admin-panel/admin-panel-3.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 h-full">
                            <div class="flex-auto">
                                <h3 class="text-2xl font-bold mb-4">Voucher Setup</h3>
                                <p class="text-base font-normal">Set up and control voucher codes to reward customers, attract new users, and keep your sales growing.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[166px] w-full" src="/images/features/admin-panel/admin-panel-4.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 h-full">
                            <div class="flex-auto">
                                <h3 class="text-2xl font-bold mb-4">Campaign Setup</h3>
                                <p class="text-base font-normal">Run time-based campaigns to promote restaurants, highlight special deals, and drive more orders during peak hours.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[166px] w-full" src="/images/features/admin-panel/admin-panel-5.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 lg:grid-rows-2 lg:grid-flow-col gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 lg:row-span-1 pt-8 px-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Transactions</h3>
                                <p class="text-base font-normal">ATrack all financial activities in one place — from restaurant earnings to commissions and payouts, with full transparency.</p>
                            </div>
                            <NuxtImg class="w-[318px] h-[226px]" src="/images/features/admin-panel/admin-panel-5.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 lg:row-span-1 pt-8 px-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Cash Collections</h3>
                                <p class="text-base font-normal">Monitor all cash collections from delivery personnel and restaurants to ensure accurate, hassle-free accounting.</p>
                            </div>
                            <NuxtImg class="w-[336px] h-[226px]" src="/images/features/admin-panel/admin-panel-6.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 lg:row-span-2 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Payouts</h3>
                                <p class="text-base font-normal">Manage and release restaurant, delivery man, other staffs payouts easily — keep payment records clear, fast, and fully organized.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[366px] w-full" src="/images/features/admin-panel/admin-panel-7.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 ">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Order Tracker</h3>
                                <p class="text-base font-normal">Track any order in the order tacker — see statuses, issues, and ensure smooth operations & customer satisfaction.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[184px] w-full" src="/images/features/admin-panel/admin-panel-9.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 pt-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Return Orders</h3>
                                <p class="text-base font-normal">Manage and process returned orders quickly, keeping customers, delivery man, and restaurants informed every step of the way.</p>
                            </div>
                            <NuxtImg class="w-[368px] h-[286px]" src="/images/features/admin-panel/admin-panel-10.png" alt="addon"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8 feature-card">
                        <div class="flex flex-col items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Order Refund</h3>
                                <p class="text-base font-normal overflow-ellipsis">Process customer refunds smoothly and efficiently — track refund requests, approve payments, and maintain full transparency to ensure trust and satisfaction for both your customers and restaurants.</p>
                            </div>
                            <NuxtImg class="h-[265px] w-full" src="/images/features/admin-panel/admin-panel-11.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8 feature-card">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6 h-full">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Reviews & Ratings</h3>
                                <p class="text-base font-normal">Manage and monitor customer reviews & ratings for restaurants and delivery men — respond, track ratings, and ensure feedback helps improve service and build trust.</p>
                            </div>
                            <NuxtImg class="h-[241px] w-full" src="/images/features/admin-panel/admin-panel-12.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 pt-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">User & Restaurant Management</h3>
                                <p class="text-base font-normal">We offer user management system lets the admin easily manage users and restaurants from one place — add or edit accounts, monitor activity, and keep your platform organized and running smoothly.</p>
                            </div>
                            <NuxtImg class="w-[368px] h-[286px]" src="/images/features/admin-panel/admin-panel-13.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 ">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Reports</h3>
                                <p class="text-base font-normal">Access detailed reports on credit balance & collection — gain insights to make informed business decisions.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[184px] w-full" src="/images/features/admin-panel/admin-panel-14.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 py-8 ps-8 feature-card">
                        <div class="flex flex-col md:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Company & Business Settings</h3>
                                <p class="text-base font-normal">Company & Site Settings allow the admin to configure essential details like business name, logo, contact info, tax settings, currency, google map and more. Set up and customize your business preferences — manage currency, taxes, time zones, and other essential settings effortlessly.</p>
                            </div>
                            <NuxtImg class="max-w-[599px] w-full h-[286px]" src="/images/features/admin-panel/admin-panel-15.png" alt="addon"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 pt-8 ps-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Front Web Setup</h3>
                                <p class="text-base font-normal">Customize your website’s front view with ease — manage banners, sections, and content to match your brand perfectly.</p>
                            </div>
                            <NuxtImg class="max-w-[368px] w-full h-[286px]" src="/images/features/admin-panel/admin-panel-16.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 ">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Subscribed Emails</h3>
                                <p class="text-base font-normal">Manage all subscribed customer — perfect for sending updates, offers, & newsletters to keep your audience engaged.</p>
                            </div>
                            <NuxtImg class=" h-[184px] w-full" src="/images/features/admin-panel/admin-panel-17.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8 feature-card">
                        <div class="flex flex-col items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Delivery & Rider Tips Setup</h3>
                                <p class="text-base font-normal overflow-ellipsis">Set up and manage delivery and rider tip options — let customers reward great service while keeping payouts transparent and organized.</p>
                            </div>
                            <NuxtImg class="h-[265px] w-full" src="/images/features/admin-panel/admin-panel-18.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8 feature-card">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6 h-full">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Cuisine Setup</h3>
                                <p class="text-base font-normal">Add and manage cuisines easily — categorize restaurants and dishes to help customers find their favorite food faster.</p>
                            </div>
                            <NuxtImg class="h-[241px] w-full" src="/images/features/admin-panel/admin-panel-19.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4   px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4 ">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Push Notification, Mail, and SMS  Setup</h3>
                                <p class="text-base font-normal">Set up push notifications, emails, & SMS alerts — keep customers, restaurants, and delivery teams instantly informed.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[160px] w-full" src="/images/features/admin-panel/admin-panel-19.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8   pt-8 ps-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Role & Permission</h3>
                                <p class="text-base font-normal">Bulk Import & Export feature allows admins to quickly upload or download item data in bulk, making it easy to manage large menus efficiently and save time on manual entry.</p>
                            </div>
                            <NuxtImg class="max-w-[368px] w-full h-[286px]" src="/images/features/admin-panel/admin-panel-20.png" alt="addon"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8 feature-card">
                        <div class="flex flex-col items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Multi Payment Setup</h3>
                                <p class="text-base font-normal overflow-ellipsis">Enable multiple payment methods — from cash to digital wallets and gateways, giving customers a seamless and flexible checkout experience.</p>
                            </div>
                            <NuxtImg class="h-[289px] w-full" src="/images/features/admin-panel/admin-panel-22.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8 feature-card">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Multi Language Setup</h3>
                                <p class="text-base font-normal">Add and manage multiple languages — let customers, restaurants, and delivery teams use the platform in their preferred language for a smoother experience.</p>
                            </div>
                            <NuxtImg class="h-[289px] w-full" src="/images/features/admin-panel/admin-panel-23.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8 feature-card">
                        <div class="flex flex-col items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Multi Pages Setup</h3>
                                <p class="text-base font-normal overflow-ellipsis">Create and manage essential pages like Terms & Conditions, Privacy Policy, Contact Us, About Us, etc. — keeping your platform complete and compliant.</p>
                            </div>
                            <NuxtImg class="h-[289px] w-full" src="/images/features/admin-panel/admin-panel-24.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8 feature-card">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">PWA Setup</h3>
                                <p class="text-base font-normal">Add and manage multiple languages — let customers, restaurants, and delivery teams use the platform in their preferred language for a smoother experience.</p>
                            </div>
                            <NuxtImg class="h-[289px] w-full" src="/images/features/admin-panel/admin-panel-25.png" alt="pos"/>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="featureActive == 2" class="tab-content mb-12 md:mb-16">
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8  feature-card">
                        <div class="flex flex-col items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Restaurant Panel Dashboard</h3>
                                <p class="text-base font-normal overflow-ellipsis">Give restaurant owners full control with a smart dashboard — manage menus, track orders, monitor earnings, and keep daily operations running smoothly.</p>
                            </div>
                            <NuxtImg class="h-[286px] w-full" src="/images/features/restaurant-panel/restaurant-panel-1.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8  feature-card">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Items Management</h3>
                                <p class="text-base font-normal">Add, edit, and organize food items with items extras and addons easily — manage categories, prices, and availability to keep your menu up to date.</p>
                            </div>
                            <NuxtImg class="h-[286px] w-full" src="/images/features/restaurant-panel/restaurant-panel-2.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Item’s Extras</h3>
                                <p class="text-base font-normal">Add & manage item extras like toppings or anything like that to give customers a fully customizable ordering experience.</p>
                            </div>
                            <NuxtImg class="h-[205px] w-full" src="/images/features/restaurant-panel/restaurant-panel-3.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Item’s Addons</h3>
                                <p class="text-base font-normal">Create and manage item addons to offer extra options, enhance customer choices, and boost order value.</p>
                            </div>
                            <NuxtImg class="h-[205px] w-full" src="/images/features/restaurant-panel/restaurant-panel-4.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Point of Sale (POS)</h3>
                                <p class="text-base font-normal">Process orders quickly and efficiently with offers, token, & multiple payment option from Point of Sale (POS).</p>
                            </div>
                            <NuxtImg class="h-[205px] w-full" src="/images/features/restaurant-panel/restaurant-panel-5.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8 feature-card">
                        <div class="flex flex-col items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">POS Orders Manage</h3>
                                <p class="text-base font-normal overflow-ellipsis">A well-organized POS order list allows to quickly locate orders by their current status. Easily view and manage individual orders, including customer details, order summary, status, and more.</p>
                            </div>
                            <NuxtImg class="h-[265px] w-full" src="/images/features/restaurant-panel/restaurant-panel-6.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8 feature-card">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Online Orders Manage</h3>
                                <p class="text-base font-normal">A well-organized online order list allows to quickly locate orders by their current status. Easily view and manage individual orders, including customer details, order summary, status, & more.</p>
                            </div>
                            <NuxtImg class="h-[286px] w-full" src="/images/features/restaurant-panel/restaurant-panel-7.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Coupon Setup</h3>
                                <p class="text-base font-normal">Add & manage item extras like toppings or anything like that to give customers a fully customizable ordering experience.</p>
                            </div>
                            <NuxtImg class="h-[205px] w-full" src="/images/features/restaurant-panel/restaurant-panel-8.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Campaigns Manage</h3>
                                <p class="text-base font-normal">Create and manage item addons to offer extra options, enhance customer choices, and boost order value.</p>
                            </div>
                            <NuxtImg class="h-[205px] w-full" src="/images/features/restaurant-panel/restaurant-panel-9.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Offers Manage</h3>
                                <p class="text-base font-normal">Process orders quickly and efficiently with offers, token, & multiple payment option from Point of Sale (POS).</p>
                            </div>
                            <NuxtImg class="h-[205px] w-full" src="/images/features/restaurant-panel/restaurant-panel-10.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Ratings & Reviews</h3>
                                <p class="text-base font-normal">View and manage customer ratings and reviews — understand feedback and improve your food quality.</p>
                            </div>
                            <NuxtImg class="h-[205px] w-full" src="/images/features/restaurant-panel/restaurant-panel-11.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Payouts</h3>
                                <p class="text-base font-normal">Receive payouts directly from the admin — track your restaurant’s earnings and payouts with full transparency.</p>
                            </div>
                            <NuxtImg class="h-[205px] w-full" src="/images/features/restaurant-panel/restaurant-panel-12.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Reports</h3>
                                <p class="text-base font-normal">Access detailed reports on sales, and items — analyze performance and make decisions to grow your restaurant.</p>
                            </div>
                            <NuxtImg class="h-[205px] w-full" src="/images/features/restaurant-panel/restaurant-panel-13.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 pt-8 pl-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Restaurant Setting</h3>
                                <p class="text-base font-normal">Easily manage your restaurant details, location, cuisine, logo & cover image, and more — customize everything to fit your business perfectly.</p>
                            </div>
                            <NuxtImg class="max-w-[368px] w-full h-[226px] flex-grow flex-shrink-0" src="/images/features/restaurant-panel/restaurant-panel-14.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6 h-full">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Order Setup</h3>
                                <p class="text-base font-normal">Configure how orders work — set timings, delivery, takeaway, order limits and more preferences.</p>
                            </div>
                            <NuxtImg class="h-[124px] w-full" src="/images/features/restaurant-panel/restaurant-panel-15.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8 feature-card">
                        <div class="flex flex-col items-center gap-4 sm:gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Restaurant Time Slots</h3>
                                <p class="text-base font-normal overflow-ellipsis">Set flexible opening and closing time slots for restaurants — control when orders can be placed and ensure smooth scheduling.</p>
                            </div>
                            <NuxtImg class="h-[265px] w-full" src="/images/features/restaurant-panel/restaurant-panel-16.png" alt="admin"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8 feature-card">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Item Categories</h3>
                                <p class="text-base font-normal">Create and manage item categories to keep menus organized — help customers browse and find their favorite dishes easily.</p>
                            </div>
                            <NuxtImg class="h-[286px] w-full" src="/images/features/restaurant-panel/restaurant-panel-17.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Item Attributes</h3>
                                <p class="text-base font-normal">Add and manage item attributes like size, flavor, or spice level — give customers more choices and ordering experience.</p>
                            </div>
                            <NuxtImg class="h-[205px] w-full" src="/images/features/restaurant-panel/restaurant-panel-18.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Restaurant Status</h3>
                                <p class="text-base font-normal">Easily control your restaurant’s online or offline status — manage availability in real time to accept orders when you’re ready.</p>
                            </div>
                            <NuxtImg class="h-[205px] w-full" src="/images/features/restaurant-panel/restaurant-panel-19.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col justify-between items-center gap-4 sm:gap-6">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Taxes</h3>
                                <p class="text-base font-normal">Set up and manage taxes effortlessly — apply custom tax rates to orders and keep your billing accurate and compliant.</p>
                            </div>
                            <NuxtImg class="h-[205px] w-full" src="/images/features/restaurant-panel/restaurant-panel-20.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="featureActive == 3" class="tab-content mb-12 md:mb-16">
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Delivery Man Dashboard</h3>
                                <p class="text-base font-normal">A smart dashboard for delivery personnel to track assigned orders, update delivery statuses, and manage their daily tasks with ease.</p>
                            </div>
                            <NuxtImg class="max-w-[470px] h-[289px] w-full" src="/images/features/delivery-panel/deliveryman-panel-1.png" alt="pos"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Ratings & Reviews</h3>
                                <p class="text-base font-normal">View customer ratings and feedback on completed deliveries — help to maintain service quality and build a trusted delivery experience.</p>
                            </div>
                            <NuxtImg class="max-w-[470px] h-[289px] w-full" src="/images/features/delivery-panel/deliveryman-panel-2.png" alt="pos"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Available Orders</h3>
                                <p class="text-base font-normal">Check all available delivery orders in real time — accept tasks instantly and keep deliveries running without delay.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[184px] w-full" src="/images/features/delivery-panel/deliveryman-panel-3.png" alt="qr_code"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-8 pt-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Active Orders</h3>
                                <p class="text-base font-normal">View and manage all your accepted orders — track delivery progress, update statuses, and ensure every order reaches the customer on time.</p>
                            </div>
                            <NuxtImg class="max-w-[368px] w-full h-[286px] flex-grow flex-shrink-0" src="/images/features/delivery-panel/deliveryman-panel-4.png" alt="addon"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 pt-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Payouts</h3>
                                <p class="text-base font-normal">Track your completed deliveries and earnings — manage payout requests and stay updated on your payment history with ease.</p>
                            </div>
                            <NuxtImg class="max-w-[388px] w-full h-[286px] flex-grow flex-shrink-0" src="/images/features/delivery-panel/deliveryman-panel-5.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Collections</h3>
                                <p class="text-base font-normal">View all collected cash from deliveries — keep records clear and submit collections to the admin accurately.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[168px] w-full" src="/images/features/delivery-panel/deliveryman-panel-6.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Messaging</h3>
                                <p class="text-base font-normal">The Messaging feature keeps delivery personnel connected at all times. Communicates easily with customers directly from the dashboard to ensure smooth coordination and timely deliveries.</p>
                            </div>
                            <NuxtImg class=" h-[289px] w-full" src="/images/features/delivery-panel/deliveryman-panel-7.png" alt="pos"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Location Setup</h3>
                                <p class="text-base font-normal">Set and manage your live location directly from the dashboard — receive delivery requests from nearby restaurants and ensure faster, more efficient order handling.</p>
                            </div>
                            <NuxtImg class=" h-[289px] w-full" src="/images/features/delivery-panel/deliveryman-panel-8.png" alt="pos"/>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="featureActive == 4" class="tab-content mb-12 md:mb-16">
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 pt-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Responsive PWA User Website</h3>
                                <p class="text-base font-normal">Experience fast, app-like performance on any device — Foodpi’s responsive PWA website lets users browse, order, and track food seamlessly without any installation.</p>
                            </div>
                            <NuxtImg class="max-w-[368px] w-full h-[286px] flex-grow flex-shrink-0" src="/images/features/user-panel/user-panel-1.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Cuisine Category</h3>
                                <p class="text-base font-normal">Browse restaurants and dishes by cuisine — making it easy for customers to find their favorite food in just a few clicks.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[184px] w-full" src="/images/features/user-panel/user-panel-2.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Location Setup</h3>
                                <p class="text-base font-normal">Set your delivery location instantly to discover nearby restaurants and get faster, more accurate deliveries.</p>
                            </div>
                            <NuxtImg class="h-[184px]" src="/images/features/user-panel/user-panel-3.png" alt="user-panel"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-4 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Search Food/Restaurant</h3>
                                <p class="text-base font-normal">Quickly find item or restaurants — search by name, cuisine, or category for a seamless ordering experience.</p>
                            </div>
                            <NuxtImg class="h-[184px] flex-grow flex-shrink-0" src="/images/features/user-panel/user-panel-4.png" alt="user-panel"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-4 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Delivery/Takeaway</h3>
                                <p class="text-base font-normal">Easily filter restaurants by delivery or takeaway — choose the option that suits your schedule and preference.</p>
                            </div>
                            <NuxtImg class="h-[184px] flex-grow flex-shrink-0" src="/images/features/user-panel/user-panel-5.png" alt="user-panel"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Offer Slider</h3>
                                <p class="text-base font-normal">Discover running special offers — browse the offer slider to find the best deals and save on your favorite meals.</p>
                            </div>
                            <NuxtImg class="h-[184px]" src="/images/features/user-panel/user-panel-6.png" alt="user-panel"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-4 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Multiple Banners</h3>
                                <p class="text-base font-normal">Highlight ongoing promotions with multiple campaign banners — attract customers and boost orders.</p>
                            </div>
                            <NuxtImg class="h-[184px] flex-grow flex-shrink-0" src="/images/features/user-panel/user-panel-7.png" alt="user-panel"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-4 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Cookie Banner</h3>
                                <p class="text-base font-normal">Foodpi includes a built-in cookie banner to help you stay transparent —inform users and gain consent with ease.</p>
                            </div>
                            <NuxtImg class="h-[184px] flex-grow flex-shrink-0" src="/images/features/user-panel/user-panel-8.png" alt="user-panel"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">All Restaurants List</h3>
                                <p class="text-base font-normal overflow-ellipsis">Easily explore all restaurants near your current location — browse menus, check offers, and place orders quickly for a faster, more convenient dining experience.</p>
                            </div>
                            <NuxtImg class="h-[289px]" src="/images/features/user-panel/user-panel-9.png" alt="user-panel"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Favorite Restaurants List</h3>
                                <p class="text-base font-normal">Save and manage all your favorite restaurants in one convenient list — easily browse menus, view offers, and reorder your preferred meals whenever you like.</p>
                            </div>
                            <NuxtImg class="h-[289px] w-full" src="/images/features/user-panel/user-panel-10.png" alt="user-panel"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 pt-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Restaurant Menu</h3>
                                <p class="text-base font-normal">Browse the full menu of any restaurant — explore dishes, view prices, available deals, veg/non-veg filtering, 18+ & halal tag, and customize your order for the perfect meal.</p>
                            </div>
                            <NuxtImg class="max-w-[368px] w-full h-[286px] flex-grow flex-shrink-0" src="/images/features/user-panel/user-panel-11.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Restaurant Details</h3>
                                <p class="text-base font-normal">View all essential details of a restaurant — opening hours, location, ratings, and more to make informed before ordering.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[184px] w-full" src="/images/features/user-panel/user-panel-12.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Item Details & Add to Cart</h3>
                                <p class="text-base font-normal overflow-ellipsis">Check complete item details including description, price, extras, variations, quantity and addons — customize your meal and add it to cart in just one click.</p>
                            </div>
                            <NuxtImg class="h-[289px]" src="/images/features/user-panel/user-panel-13.png" alt="user-panel"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Customer’s Cart</h3>
                                <p class="text-base font-normal">The customer cart page offers a clear summary of selected items, allowing customers to review quantities, customize extras, and proceed to checkout with ease.</p>
                            </div>
                            <NuxtImg class="h-[289px] w-full" src="/images/features/user-panel/user-panel-14.png" alt="user-panel"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Checkout Page</h3>
                                <p class="text-base font-normal overflow-ellipsis">Review your order, choose delivery or takeaway, apply vouchers, and select payment methods — everything you need for a smooth checkout.</p>
                            </div>
                            <NuxtImg class="h-[289px]" src="/images/features/user-panel/user-panel-15.png" alt="user-panel"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Set Delivery Location</h3>
                                <p class="text-base font-normal">Customer can set or update delivery location on the map or by address from checkout — ensure accurate and timely delivery everytime.</p>
                            </div>
                            <NuxtImg class="h-[289px] w-full" src="/images/features/user-panel/user-panel-16.png" alt="user-panel"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-8 pt-8 feature-card">
                        <div class="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 overflow-hidden">
                            <div class="sm:py-8 ps-8 flex-shrink">
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Schedule Delivery</h3>
                                <p class="text-base font-normal">Customers can schedule their delivery by selecting a preferred date and time—making it easy to plan meals in advance and receive orders at their convenience.</p>
                            </div>
                            <NuxtImg class="max-w-[368px] w-full h-[286px] flex-grow flex-shrink-0" src="/images/features/user-panel/user-panel-17.png" alt="addon"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col sm:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Rider Tip</h3>
                                <p class="text-base font-normal">Appreciate great service by adding a rider tip during checkout — reward delivery partners for their effort and dedication.</p>
                            </div>
                            <NuxtImg class="max-w-[324px] h-[184px] w-full" src="/images/features/user-panel/user-panel-18.png" alt="qr_code"/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Coupon or Voucher</h3>
                                <p class="text-base font-normal">Customers can discover all available coupons & vouchers and can apply them at checkout for instant savings.</p>
                            </div>
                            <NuxtImg class="h-[192px]" src="/images/features/user-panel/user-panel-19.png" alt="user-panel"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-4 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Payment Method</h3>
                                <p class="text-base font-normal">Customer can pay securely using cash, card, or credit wallets for a hassle-free ordering experience.</p>
                            </div>
                            <NuxtImg class="h-[192px] flex-grow flex-shrink-0" src="/images/features/user-panel/user-panel-20.png" alt="user-panel"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-4 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Order Tracking</h3>
                                <p class="text-base font-normal">Customers can discover all available coupons & vouchers and can apply them at checkout for instant savings.</p>
                            </div>
                            <NuxtImg class="h-[192px] flex-grow flex-shrink-0" src="/images/features/user-panel/user-panel-21.png" alt="user-panel"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Order Details</h3>
                                <p class="text-base font-normal overflow-ellipsis">View complete order information in one place — track items, prices, payment status, and delivery updates easily in real time —from confirmation to preparation and delivery.</p>
                            </div>
                            <NuxtImg class="h-[289px]" src="/images/features/user-panel/user-panel-22.png" alt="user-panel"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Order History</h3>
                                <p class="text-base font-normal">View complete order information in one place — track items, prices, payment status, and delivery updates easily in real time —from confirmation to preparation and delivery.</p>
                            </div>
                            <NuxtImg class="h-[289px] w-full" src="/images/features/user-panel/user-panel-23.png" alt="user-panel"/>
                        </div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-6 pt-8 px-8 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-6 overflow-hidden">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Messaging System</h3>
                                <p class="text-base font-normal overflow-ellipsis">Built-in messaging system allows real-time communication between customers and delivery personnel making it easy to  get updates and resolve issues quickly without any hassle.</p>
                            </div>
                            <NuxtImg class="h-[289px]" src="/images/features/user-panel/user-panel-24.png" alt="user-panel"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-6 px-8 pt-8 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-6">
                            <div>
                                <h3 class="text-2xl md:text-3xl font-bold mb-4">Authentication & Guest Login</h3>
                                <p class="text-base font-normal">Customers can sign up or log in easily to manage their orders, or simply continue as a guest for a quick and hassle-free checkout experience.</p>
                            </div>
                            <NuxtImg class="h-[289px] w-full" src="/images/features/user-panel/user-panel-25.png" alt="user-panel"/>
                        </div>
                    </div>
                </div>
                 <div class="grid grid-cols-12 gap-6 mb-6">
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col justify-between items-center gap-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Customer Profile</h3>
                                <p class="text-base font-normal">Manage personal details, orders, saved addresses, and preferences — keep your  profile organized.</p>
                            </div>
                            <NuxtImg class="h-[192px]" src="/images/features/user-panel/user-panel-26.png" alt="user-panel"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-4 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Credit Wallet</h3>
                                <p class="text-base font-normal">Get instant refunds directly to your in-app credit wallet — use your wallet balance for future orders.</p>
                            </div>
                            <NuxtImg class="h-[192px] flex-grow flex-shrink-0" src="/images/features/user-panel/user-panel-27.png" alt="user-panel"/>
                        </div>
                    </div>
                    <div class="col-span-12 lg:col-span-4 px-6 pt-6 feature-card">
                        <div class="flex flex-col md:flex-row lg:flex-col items-center gap-4 overflow-hidden">
                            <div>
                                <h3 class="text-2xl font-bold mb-4">Multi Language</h3>
                                <p class="text-base font-normal">Foodpi supports multiple languages for a more personalized and accessible user experience.</p>
                            </div>
                            <NuxtImg class="h-[192px] flex-grow flex-shrink-0" src="/images/features/user-panel/user-panel-28.png" alt="user-panel"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </section>
     <!--===============================
           KEY FEATURES PART END 
     =================================-->
</template>
<script setup>
    const featureActive = ref(1);
    const handleTab = (id) =>{
        featureActive.value = id
        const content = document.querySelector('.tab-content');
        if(content){
            content.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    const featureTabs = reactive([
        { id: 1, name: 'Admin Panel', icon:"icon-admin-panel" },
        { id: 2, name: 'Restaurant Owner Panel', icon:"icon-branch-panel" },
        { id: 3, name: 'Delivery Man Panel', icon:"icon-delivery-app" },
        { id: 4, name: 'User PWA Website', icon:"icon-user-site" },
    ])

</script>