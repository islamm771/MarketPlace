import React from "react";

const Navigation = () => {
	return (
		<React.Fragment>
			<nav
				id="navigation-widget-small"
				class="navigation-widget navigation-widget-desktop closed sidebar left delayed"
			>
				<a
					class="user-avatar small no-outline online"
					href="profile-timeline.html"
				>
					<div class="user-avatar-content">
						<div class="hexagon-image-30-32" data-src="img/avatar/01.jpg"></div>
					</div>

					<div class="user-avatar-progress">
						<div class="hexagon-progress-40-44"></div>
					</div>

					<div class="user-avatar-progress-border">
						<div class="hexagon-border-40-44"></div>
					</div>

					<div class="user-avatar-badge">
						<div class="user-avatar-badge-border">
							<div class="hexagon-22-24"></div>
						</div>

						<div class="user-avatar-badge-content">
							<div class="hexagon-dark-16-18"></div>
						</div>

						<p class="user-avatar-badge-text">24</p>
					</div>
				</a>

				<ul class="menu small">
					<li class="menu-item active">
						<a
							class="menu-item-link text-tooltip-tfr"
							href="newsfeed.html"
							data-title="Newsfeed"
						>
							<svg class="menu-item-link-icon icon-newsfeed">
								<use xlinkHref="#svg-newsfeed"></use>
							</svg>
						</a>
					</li>

					<li class="menu-item">
						<a
							class="menu-item-link text-tooltip-tfr"
							href="overview.html"
							data-title="Overview"
						>
							<svg class="menu-item-link-icon icon-overview">
								<use xlinkHref="#svg-overview"></use>
							</svg>
						</a>
					</li>

					<li class="menu-item">
						<a
							class="menu-item-link text-tooltip-tfr"
							href="groups.html"
							data-title="Groups"
						>
							<svg class="menu-item-link-icon icon-group">
								<use xlinkHref="#svg-group"></use>
							</svg>
						</a>
					</li>

					<li class="menu-item">
						<a
							class="menu-item-link text-tooltip-tfr"
							href="members.html"
							data-title="Members"
						>
							<svg class="menu-item-link-icon icon-members">
								<use xlinkHref="#svg-members"></use>
							</svg>
						</a>
					</li>

					<li class="menu-item">
						<a
							class="menu-item-link text-tooltip-tfr"
							href="badges.html"
							data-title="Badges"
						>
							<svg class="menu-item-link-icon icon-badges">
								<use xlinkHref="#svg-badges"></use>
							</svg>
						</a>
					</li>

					<li class="menu-item">
						<a
							class="menu-item-link text-tooltip-tfr"
							href="quests.html"
							data-title="Quests"
						>
							<svg class="menu-item-link-icon icon-quests">
								<use xlinkHref="#svg-quests"></use>
							</svg>
						</a>
					</li>

					<li class="menu-item">
						<a
							class="menu-item-link text-tooltip-tfr"
							href="streams.html"
							data-title="Streams"
						>
							<svg class="menu-item-link-icon icon-streams">
								<use xlinkHref="#svg-streams"></use>
							</svg>
						</a>
					</li>

					<li class="menu-item">
						<a
							class="menu-item-link text-tooltip-tfr"
							href="events.html"
							data-title="Events"
						>
							<svg class="menu-item-link-icon icon-events">
								<use xlinkHref="#svg-events"></use>
							</svg>
						</a>
					</li>

					<li class="menu-item">
						<a
							class="menu-item-link text-tooltip-tfr"
							href="forums.html"
							data-title="Forums"
						>
							<svg class="menu-item-link-icon icon-forums">
								<use xlinkHref="#svg-forums"></use>
							</svg>
						</a>
					</li>

					<li class="menu-item">
						<a
							class="menu-item-link text-tooltip-tfr"
							href="marketplace.html"
							data-title="Marketplace"
						>
							<svg class="menu-item-link-icon icon-marketplace">
								<use xlinkHref="#svg-marketplace"></use>
							</svg>
						</a>
					</li>
				</ul>
			</nav>

			<nav
				id="navigation-widget"
				class="navigation-widget navigation-widget-desktop sidebar left hidden"
				data-simplebar
			>
				<figure class="navigation-widget-cover liquid">
					<img src="img/cover/01.jpg" alt="cover-01" />
				</figure>

				<div class="user-short-description">
					<a
						class="user-short-description-avatar user-avatar medium"
						href="profile-timeline.html"
					>
						<div class="user-avatar-border">
							<div class="hexagon-120-132"></div>
						</div>

						<div class="user-avatar-content">
							<div
								class="hexagon-image-82-90"
								data-src="img/avatar/01.jpg"
							></div>
						</div>

						<div class="user-avatar-progress">
							<div class="hexagon-progress-100-110"></div>
						</div>

						<div class="user-avatar-progress-border">
							<div class="hexagon-border-100-110"></div>
						</div>

						<div class="user-avatar-badge">
							<div class="user-avatar-badge-border">
								<div class="hexagon-32-36"></div>
							</div>

							<div class="user-avatar-badge-content">
								<div class="hexagon-dark-26-28"></div>
							</div>

							<p class="user-avatar-badge-text">24</p>
						</div>
					</a>

					<p class="user-short-description-title">
						<a href="profile-timeline.html">Marina Valentine</a>
					</p>

					<p class="user-short-description-text">
						<a href="#">www.gamehuntress.com</a>
					</p>
				</div>

				<div class="badge-list small">
					<div class="badge-item">
						<img src="img/badge/gold-s.png" alt="badge-gold-s" />
					</div>

					<div class="badge-item">
						<img src="img/badge/age-s.png" alt="badge-age-s" />
					</div>

					<div class="badge-item">
						<img src="img/badge/caffeinated-s.png" alt="badge-caffeinated-s" />
					</div>

					<div class="badge-item">
						<img src="img/badge/warrior-s.png" alt="badge-warrior-s" />
					</div>

					<a class="badge-item" href="profile-badges.html">
						<img src="img/badge/blank-s.png" alt="badge-blank-s" />
						<p class="badge-item-text">+9</p>
					</a>
				</div>

				<div class="user-stats">
					<div class="user-stat">
						<p class="user-stat-title">930</p>

						<p class="user-stat-text">posts</p>
					</div>

					<div class="user-stat">
						<p class="user-stat-title">82</p>

						<p class="user-stat-text">friends</p>
					</div>

					<div class="user-stat">
						<p class="user-stat-title">5.7k</p>

						<p class="user-stat-text">visits</p>
					</div>
				</div>

				<ul class="menu">
					<li class="menu-item active">
						<a class="menu-item-link" href="newsfeed.html">
							<svg class="menu-item-link-icon icon-newsfeed">
								<use xlinkHref="#svg-newsfeed"></use>
							</svg>
							Newsfeed
						</a>
					</li>

					<li class="menu-item">
						<a class="menu-item-link" href="overview.html">
							<svg class="menu-item-link-icon icon-overview">
								<use xlinkHref="#svg-overview"></use>
							</svg>
							Overview
						</a>
					</li>

					<li class="menu-item">
						<a class="menu-item-link" href="groups.html">
							<svg class="menu-item-link-icon icon-group">
								<use xlinkHref="#svg-group"></use>
							</svg>
							Groups
						</a>
					</li>

					<li class="menu-item">
						<a class="menu-item-link" href="members.html">
							<svg class="menu-item-link-icon icon-members">
								<use xlinkHref="#svg-members"></use>
							</svg>
							Members
						</a>
					</li>

					<li class="menu-item">
						<a class="menu-item-link" href="badges.html">
							<svg class="menu-item-link-icon icon-badges">
								<use xlinkHref="#svg-badges"></use>
							</svg>
							Badges
						</a>
					</li>

					<li class="menu-item">
						<a class="menu-item-link" href="quests.html">
							<svg class="menu-item-link-icon icon-quests">
								<use xlinkHref="#svg-quests"></use>
							</svg>
							Quests
						</a>
					</li>

					<li class="menu-item">
						<a class="menu-item-link" href="streams.html">
							<svg class="menu-item-link-icon icon-streams">
								<use xlinkHref="#svg-streams"></use>
							</svg>
							Streams
						</a>
					</li>

					<li class="menu-item">
						<a class="menu-item-link" href="events.html">
							<svg class="menu-item-link-icon icon-events">
								<use xlinkHref="#svg-events"></use>
							</svg>
							Events
						</a>
					</li>

					<li class="menu-item">
						<a class="menu-item-link" href="forums.html">
							<svg class="menu-item-link-icon icon-forums">
								<use xlinkHref="#svg-forums"></use>
							</svg>
							Forums
						</a>
					</li>

					<li class="menu-item">
						<a class="menu-item-link" href="marketplace.html">
							<svg class="menu-item-link-icon icon-marketplace">
								<use xlinkHref="#svg-marketplace"></use>
							</svg>
							Marketplace
						</a>
					</li>
				</ul>
			</nav>

			<nav
				id="navigation-widget-mobile"
				class="navigation-widget navigation-widget-mobile sidebar left hidden"
				data-simplebar
			>
				<div class="navigation-widget-close-button">
					<svg class="navigation-widget-close-button-icon icon-back-arrow">
						<use xlinkHref="#svg-back-arrow"></use>
					</svg>
				</div>

				<div class="navigation-widget-info-wrap">
					<div class="navigation-widget-info">
						<a
							class="user-avatar small no-outline"
							href="profile-timeline.html"
						>
							<div class="user-avatar-content">
								<div
									class="hexagon-image-30-32"
									data-src="img/avatar/01.jpg"
								></div>
							</div>

							<div class="user-avatar-progress">
								<div class="hexagon-progress-40-44"></div>
							</div>

							<div class="user-avatar-progress-border">
								<div class="hexagon-border-40-44"></div>
							</div>

							<div class="user-avatar-badge">
								<div class="user-avatar-badge-border">
									<div class="hexagon-22-24"></div>
								</div>

								<div class="user-avatar-badge-content">
									<div class="hexagon-dark-16-18"></div>
								</div>

								<p class="user-avatar-badge-text">24</p>
							</div>
						</a>

						<p class="navigation-widget-info-title">
							<a href="profile-timeline.html">Marina Valentine</a>
						</p>

						<p class="navigation-widget-info-text">Welcome Back!</p>
					</div>

					<p class="navigation-widget-info-button button small secondary">
						Logout
					</p>
				</div>

				<p class="navigation-widget-section-title">Sections</p>

				<ul class="menu">
					<li class="menu-item active">
						<a class="menu-item-link" href="newsfeed.html">
							<svg class="menu-item-link-icon icon-newsfeed">
								<use xlinkHref="#svg-newsfeed"></use>
							</svg>
							Newsfeed
						</a>
					</li>

					<li class="menu-item">
						<a class="menu-item-link" href="overview.html">
							<svg class="menu-item-link-icon icon-overview">
								<use xlinkHref="#svg-overview"></use>
							</svg>
							Overview
						</a>
					</li>

					<li class="menu-item">
						<a class="menu-item-link" href="groups.html">
							<svg class="menu-item-link-icon icon-group">
								<use xlinkHref="#svg-group"></use>
							</svg>
							Groups
						</a>
					</li>

					<li class="menu-item">
						<a class="menu-item-link" href="members.html">
							<svg class="menu-item-link-icon icon-members">
								<use xlinkHref="#svg-members"></use>
							</svg>
							Members
						</a>
					</li>

					<li class="menu-item">
						<a class="menu-item-link" href="badges.html">
							<svg class="menu-item-link-icon icon-badges">
								<use xlinkHref="#svg-badges"></use>
							</svg>
							Badges
						</a>
					</li>

					<li class="menu-item">
						<a class="menu-item-link" href="quests.html">
							<svg class="menu-item-link-icon icon-quests">
								<use xlinkHref="#svg-quests"></use>
							</svg>
							Quests
						</a>
					</li>

					<li class="menu-item">
						<a class="menu-item-link" href="streams.html">
							<svg class="menu-item-link-icon icon-streams">
								<use xlinkHref="#svg-streams"></use>
							</svg>
							Streams
						</a>
					</li>

					<li class="menu-item">
						<a class="menu-item-link" href="events.html">
							<svg class="menu-item-link-icon icon-events">
								<use xlinkHref="#svg-events"></use>
							</svg>
							Events
						</a>
					</li>

					<li class="menu-item">
						<a class="menu-item-link" href="forums.html">
							<svg class="menu-item-link-icon icon-forums">
								<use xlinkHref="#svg-forums"></use>
							</svg>
							Forums
						</a>
					</li>

					<li class="menu-item">
						<a class="menu-item-link" href="marketplace.html">
							<svg class="menu-item-link-icon icon-marketplace">
								<use xlinkHref="#svg-marketplace"></use>
							</svg>
							Marketplace
						</a>
					</li>
				</ul>

				<p class="navigation-widget-section-title">My Profile</p>

				<a class="navigation-widget-section-link" href="hub-profile-info.html">
					Profile Info
				</a>

				<a
					class="navigation-widget-section-link"
					href="hub-profile-social.html"
				>
					Social &amp; Stream
				</a>

				<a
					class="navigation-widget-section-link"
					href="hub-profile-notifications.html"
				>
					Notifications
				</a>

				<a
					class="navigation-widget-section-link"
					href="hub-profile-messages.html"
				>
					Messages
				</a>

				<a
					class="navigation-widget-section-link"
					href="hub-profile-requests.html"
				>
					Friend Requests
				</a>

				<p class="navigation-widget-section-title">Account</p>

				<a class="navigation-widget-section-link" href="hub-account-info.html">
					Account Info
				</a>

				<a
					class="navigation-widget-section-link"
					href="hub-account-password.html"
				>
					Change Password
				</a>

				<a
					class="navigation-widget-section-link"
					href="hub-account-settings.html"
				>
					General Settings
				</a>

				<p class="navigation-widget-section-title">Groups</p>

				<a
					class="navigation-widget-section-link"
					href="hub-group-management.html"
				>
					Manage Groups
				</a>

				<a
					class="navigation-widget-section-link"
					href="hub-group-invitations.html"
				>
					Invitations
				</a>

				<p class="navigation-widget-section-title">My Store</p>

				<a class="navigation-widget-section-link" href="hub-store-account.html">
					My Account <span class="highlighted">$250,32</span>
				</a>

				<a
					class="navigation-widget-section-link"
					href="hub-store-statement.html"
				>
					Sales Statement
				</a>

				<a class="navigation-widget-section-link" href="hub-store-items.html">
					Manage Items
				</a>

				<a
					class="navigation-widget-section-link"
					href="hub-store-downloads.html"
				>
					Downloads
				</a>

				<p class="navigation-widget-section-title">Main Links</p>

				<a class="navigation-widget-section-link" href="#">
					Home
				</a>

				<a class="navigation-widget-section-link" href="#">
					Careers
				</a>

				<a class="navigation-widget-section-link" href="#">
					Faqs
				</a>

				<a class="navigation-widget-section-link" href="#">
					About Us
				</a>

				<a class="navigation-widget-section-link" href="#">
					Our Blog
				</a>

				<a class="navigation-widget-section-link" href="#">
					Contact Us
				</a>

				<a class="navigation-widget-section-link" href="#">
					Privacy Policy
				</a>
			</nav>
		</React.Fragment>
	);
};

export default Navigation;
