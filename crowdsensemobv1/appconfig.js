const appGlobalState = {
    settings: {
        userData: {
            username : '',
            loginTime : '',
            expiryTime : '',
            expiresIn : '',
            token_type : '',
            token: '',
            isLoggedIn : false,
            TNC : false,
            userRole: ''
        },
        env: process.env.REACT_APP_ENV,
        api: {
            apiBaseUrl : process.env.REACT_APP_APIBASEURL,
            apiRequestHeaders: {
                headers: { 
                    "Content-Type" : "application/json"
                }
            }
        },
        systemTime: {},
        mixpanel: {
            token: process.env.REACT_APP_MIXPANELTOKEN
        },
        googleMapKey: process.env.REACT_APP_GOOGLEMAP_KEY,
        notifications: {
          has: false,
          title: 'Crowdsense Notifications',
          body: ''
        },
        messageNotifications: [],
        userFeedbacks: [],
        OrgUsers: [],
        toolTipGlobals: {
          resourceToolTipHandler : false,
          timelineToolTipHandler : false,
          likedislikeToolTipHandler: false,
          likeToolTipHandler : false,
          dislikeToolTipHandler : false,
          userinfoToolTipHandler : false,
          muteToolTipHandler :false,
          messageToolTipHandler: false,
          min_headlineTextTipHandler: false
        },
        feedbackStatus: false,
        changePassword: {
          tried :false,
          status: ''
        }
    },
    filters: {
        eventTypes: [],
        Locations: [],
        eventFilter: [],
        locationFilter: [],
        securitiesRawCollection: [],
        securityFilter: [],
        securities: [],
        securitiesFilter: [],
        securitiesResults: [],
        mentionTypes: [],
        mentiontypesFilter: [],
        locationContinents: [],
        continentFilteredLocations: {}
    },
    app_preferences: {
        preferences: {
            event_importance_filters : {
              Red_Colored_Events : {
                Show_Red: true,
                Desktop_Notifications_Red: true,
                Desktop_Notify_Breaking_Only_Red: false,
                Speech_Notifications_Red: false,
                SMS_Notifications_Red: true,
                Email_Notifications_Red: true,
                Email_Notify_Breaking_Only_Red: false
              },
              Yellow_Colored_Events : {
                Show_Yellow: true,
                Desktop_Notifications_Yellow: true,
                Desktop_Notify_Breaking_Only_Yellow: false,
                Speech_Notifications_Yellow: false,
                SMS_Notifications_Yellow: true,
                Email_Notifications_Yellow: true,
                Email_Notify_Breaking_Only_Yellow: false
              },
              Gray_Colored_Events : {
                Show_Gray: true,
                Desktop_Notifications_Gray: true,
                Desktop_Notify_Breaking_Only_Gray: false,
                Speech_Notifications_Gray: false,
                SMS_Notifications_Gray: false,
                Email_Notifications_Gray: true,
                Email_Notify_Breaking_Only_Gray: false
              },
              Non_Active_Curated_Events : {
                Show_NACE: '',
              }
              
            },
            email_preferences: {
              Daily_Notifications: true,
              Weekly_Notifications: true
            },
            search_preferences: {
              Search_with_gray: true,
              Search_with_black: true
            },
            event_filters: {
              Locations_Related_Countries: false,
              Securities_Line: false,
            },
            user_interface: {
              Tab_Mode: false,
              Mainstream_News: true,
              Early_Events: true,
              Analyzed_Events: true,
              Early_In_Analyzed_Events: true,
            },
            localisation_preferences: {
              Timezone: '',
              Phone: ''
            }
        },
        webNotifications: true,
        Install_Desktop_App: false,
        UserPreferenceUpdated: 0,
        preferenceRequestStatus: {
          User_Preference: true,
          Notification_Preference: true,
          Localisation_Preference: true,
          Phone_Preference: true,
          DesktopApp_Preference: true
        }
    },
    feeds: {
      tweetListMaxCount: 200,
      preventStoryUpdate: false,
      feedReqData: {
        InitialFeedRequest: '',
        LastFeedRequest: '',
        LastFeedRequestEnd: '',
        InitialFeedResponse: '',
        LastFeedResponse: '',
        RequestState:false
      },
      FeedsNotifications: {
        has: false,
        title: 'Crowdsense Notifications',
        body: ''
      },
      Stories: {},
      StoriesIndex: [],
      StoriesLatestDate: false,
      BreakingStories: {},
      BreakingStoriesIndex: [],
      AnalysedStories: {},
      AnalysedStoriesIndex: [], 

      feedDetails: {},
    }, 
    search: {
      tweetListMaxCount: 200,
      searchData: {},
      searchSaveData: {},
      searchSaveInit: false,
      searchSaveTitle: '',

      searchFeeds : [],
      searchStories : {},
      searchStoriesIndex : [],

      searchSavedFeeds: {},
      searchSavedStories: {},
      searchSavedStoriesIndex: {},
      searchSavedStoriesData: {},

      searchSaveFeedReqData: {},
      withBlackUpdated: {},
      withCuratedUpdated: {},

      reSearch: false,
      searchRequest: false
    },
    error: {
        general: false,
        systemTime: false,
        rootFeeds: false,
        auth: false,
        appError: ''
    }
}

export default appGlobalState;