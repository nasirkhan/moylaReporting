package com.twms;

import android.os.Bundle;
import org.apache.cordova.*;
import android.view.Menu;

public class TWMS extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.activity_twms, menu);
        return true;
    }
    @SuppressWarnings("deprecation")
	@Override
	 public void init() {
	     super.init();       
	     this.appView.getSettings().setNavDump(false);
	 }
}
