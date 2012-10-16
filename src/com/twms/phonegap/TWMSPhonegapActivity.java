package com.twms.phonegap;

import android.os.Bundle;
import com.phonegap.*;

public class TWMSPhonegapActivity extends DroidGap {
	/** Called when the activity is first created. */
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		super.loadUrl("file:///android_asset/www/index.html");
	}
	 @Override
	 public void init() {
	     super.init();       
	     this.appView.getSettings().setNavDump(false);
	 }

}