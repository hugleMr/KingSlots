/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.BINInitializeRequest', null, global);
goog.exportSymbol('proto.BINInitializeResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BINInitializeRequest = function(opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.BINInitializeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.BINInitializeRequest.displayName = 'proto.BINInitializeRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto suitable for use in Soy templates.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
     * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
     *     for transitional soy proto support: http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.BINInitializeRequest.prototype.toObject = function(opt_includeInstance) {
        return proto.BINInitializeRequest.toObject(opt_includeInstance, this);
    };


    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.BINInitializeRequest} msg The msg instance to transform.
     * @return {!Object}
     */
    proto.BINInitializeRequest.toObject = function(includeInstance, msg) {
        var f, obj = {
            cp: jspb.Message.getFieldWithDefault(msg, 1, ""),
            appversion: jspb.Message.getFieldWithDefault(msg, 2, ""),
            deviceid: jspb.Message.getFieldWithDefault(msg, 3, ""),
            deviceinfo: jspb.Message.getFieldWithDefault(msg, 4, ""),
            country: jspb.Message.getFieldWithDefault(msg, 5, ""),
            language: jspb.Message.getFieldWithDefault(msg, 6, ""),
            pakagename: jspb.Message.getFieldWithDefault(msg, 7, ""),
            liteversion: jspb.Message.getFieldWithDefault(msg, 8, false),
            referencecode: jspb.Message.getFieldWithDefault(msg, 9, "")
        };

        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BINInitializeRequest}
 */
proto.BINInitializeRequest.deserializeBinary = function(bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.BINInitializeRequest;
    return proto.BINInitializeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BINInitializeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BINInitializeRequest}
 */
proto.BINInitializeRequest.deserializeBinaryFromReader = function(msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {string} */ (reader.readString());
                msg.setCp(value);
                break;
            case 2:
                var value = /** @type {string} */ (reader.readString());
                msg.setAppversion(value);
                break;
            case 3:
                var value = /** @type {string} */ (reader.readString());
                msg.setDeviceid(value);
                break;
            case 4:
                var value = /** @type {string} */ (reader.readString());
                msg.setDeviceinfo(value);
                break;
            case 5:
                var value = /** @type {string} */ (reader.readString());
                msg.setCountry(value);
                break;
            case 6:
                var value = /** @type {string} */ (reader.readString());
                msg.setLanguage(value);
                break;
            case 7:
                var value = /** @type {string} */ (reader.readString());
                msg.setPakagename(value);
                break;
            case 8:
                var value = /** @type {boolean} */ (reader.readBool());
                msg.setLiteversion(value);
                break;
            case 9:
                var value = /** @type {string} */ (reader.readString());
                msg.setReferencecode(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.BINInitializeRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.BINInitializeRequest.serializeBinaryToWriter = function(message, writer) {
    message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BINInitializeRequest.prototype.serializeBinary = function() {
    var writer = new jspb.BinaryWriter();
    this.serializeBinaryToWriter(writer);
    return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.BINInitializeRequest.prototype.serializeBinaryToWriter = function (writer) {
    var f = undefined;
    f = this.getCp();
    if (f.length > 0) {
        writer.writeString(
            1,
            f
        );
    }
    f = this.getAppversion();
    if (f.length > 0) {
        writer.writeString(
            2,
            f
        );
    }
    f = this.getDeviceid();
    if (f.length > 0) {
        writer.writeString(
            3,
            f
        );
    }
    f = this.getDeviceinfo();
    if (f.length > 0) {
        writer.writeString(
            4,
            f
        );
    }
    f = this.getCountry();
    if (f.length > 0) {
        writer.writeString(
            5,
            f
        );
    }
    f = this.getLanguage();
    if (f.length > 0) {
        writer.writeString(
            6,
            f
        );
    }
    f = this.getPakagename();
    if (f.length > 0) {
        writer.writeString(
            7,
            f
        );
    }
    f = this.getLiteversion();
    if (f) {
        writer.writeBool(
            8,
            f
        );
    }
    f = this.getReferencecode();
    if (f.length > 0) {
        writer.writeString(
            9,
            f
        );
    }
};


/**
 * optional string cp = 1;
 * @return {string}
 */
proto.BINInitializeRequest.prototype.getCp = function() {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.BINInitializeRequest.prototype.setCp = function(value) {
    jspb.Message.setField(this, 1, value);
};


/**
 * optional string appVersion = 2;
 * @return {string}
 */
proto.BINInitializeRequest.prototype.getAppversion = function() {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.BINInitializeRequest.prototype.setAppversion = function(value) {
    jspb.Message.setField(this, 2, value);
};


/**
 * optional string deviceId = 3;
 * @return {string}
 */
proto.BINInitializeRequest.prototype.getDeviceid = function() {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.BINInitializeRequest.prototype.setDeviceid = function(value) {
    jspb.Message.setField(this, 3, value);
};


/**
 * optional string deviceInfo = 4;
 * @return {string}
 */
proto.BINInitializeRequest.prototype.getDeviceinfo = function() {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.BINInitializeRequest.prototype.setDeviceinfo = function(value) {
    jspb.Message.setField(this, 4, value);
};


/**
 * optional string country = 5;
 * @return {string}
 */
proto.BINInitializeRequest.prototype.getCountry = function() {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.BINInitializeRequest.prototype.setCountry = function(value) {
    jspb.Message.setField(this, 5, value);
};


/**
 * optional string language = 6;
 * @return {string}
 */
proto.BINInitializeRequest.prototype.getLanguage = function() {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.BINInitializeRequest.prototype.setLanguage = function(value) {
    jspb.Message.setField(this, 6, value);
};


/**
 * optional string pakageName = 7;
 * @return {string}
 */
proto.BINInitializeRequest.prototype.getPakagename = function() {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.BINInitializeRequest.prototype.setPakagename = function(value) {
    jspb.Message.setField(this, 7, value);
};


/**
 * optional bool liteVersion = 8;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.BINInitializeRequest.prototype.getLiteversion = function() {
    return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.BINInitializeRequest.prototype.setLiteversion = function(value) {
    jspb.Message.setField(this, 8, value);
};


/**
 * optional string referenceCode = 9;
 * @return {string}
 */
proto.BINInitializeRequest.prototype.getReferencecode = function() {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.BINInitializeRequest.prototype.setReferencecode = function(value) {
    jspb.Message.setField(this, 9, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BINInitializeResponse = function(opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, proto.BINInitializeResponse.repeatedFields_, null);
};
goog.inherits(proto.BINInitializeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.BINInitializeResponse.displayName = 'proto.BINInitializeResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.BINInitializeResponse.repeatedFields_ = [16,19];



if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto suitable for use in Soy templates.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
     * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
     *     for transitional soy proto support: http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.BINInitializeResponse.prototype.toObject = function(opt_includeInstance) {
        return proto.BINInitializeResponse.toObject(opt_includeInstance, this);
    };


    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.BINInitializeResponse} msg The msg instance to transform.
     * @return {!Object}
     */
    proto.BINInitializeResponse.toObject = function(includeInstance, msg) {
        var f, obj = {
            responsecode: jspb.Message.getFieldWithDefault(msg, 1, false),
            message: jspb.Message.getFieldWithDefault(msg, 2, ""),
            currentappversion: jspb.Message.getFieldWithDefault(msg, 3, ""),
            downloadurl: jspb.Message.getFieldWithDefault(msg, 4, ""),
            cashcurrency: jspb.Message.getFieldWithDefault(msg, 5, ""),
            goldcurrency: jspb.Message.getFieldWithDefault(msg, 6, ""),
            forceupdate: jspb.Message.getFieldWithDefault(msg, 7, false),
            enablequickplay: jspb.Message.getFieldWithDefault(msg, 8, false),
            enablecashsystem: jspb.Message.getFieldWithDefault(msg, 9, false),
            enablepurchasecash: jspb.Message.getFieldWithDefault(msg, 10, false),
            enabletopup: jspb.Message.getFieldWithDefault(msg, 11, false),
            enablecashtogold: jspb.Message.getFieldWithDefault(msg, 12, false),
            enablecashtransfer: jspb.Message.getFieldWithDefault(msg, 13, false),
            enablegiftcode: jspb.Message.getFieldWithDefault(msg, 14, false),
            cashtogoldratio: jspb.Message.getFieldWithDefault(msg, 15, 0),
            hotlinesList: jspb.Message.getField(msg, 16),
            fanpageurl: jspb.Message.getFieldWithDefault(msg, 17, ""),
            websiteurl: jspb.Message.getFieldWithDefault(msg, 18, ""),
            enablegameidsList: jspb.Message.getField(msg, 19),
            resetpwsmssyntax: jspb.Message.getFieldWithDefault(msg, 20, "")
        };

        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BINInitializeResponse}
 */
proto.BINInitializeResponse.deserializeBinary = function(bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.BINInitializeResponse;
    return proto.BINInitializeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BINInitializeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BINInitializeResponse}
 */
proto.BINInitializeResponse.deserializeBinaryFromReader = function(msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {boolean} */ (reader.readBool());
                msg.setResponsecode(value);
                break;
            case 2:
                var value = /** @type {string} */ (reader.readString());
                msg.setMessage(value);
                break;
            case 3:
                var value = /** @type {string} */ (reader.readString());
                msg.setCurrentappversion(value);
                break;
            case 4:
                var value = /** @type {string} */ (reader.readString());
                msg.setDownloadurl(value);
                break;
            case 5:
                var value = /** @type {string} */ (reader.readString());
                msg.setCashcurrency(value);
                break;
            case 6:
                var value = /** @type {string} */ (reader.readString());
                msg.setGoldcurrency(value);
                break;
            case 7:
                var value = /** @type {boolean} */ (reader.readBool());
                msg.setForceupdate(value);
                break;
            case 8:
                var value = /** @type {boolean} */ (reader.readBool());
                msg.setEnablequickplay(value);
                break;
            case 9:
                var value = /** @type {boolean} */ (reader.readBool());
                msg.setEnablecashsystem(value);
                break;
            case 10:
                var value = /** @type {boolean} */ (reader.readBool());
                msg.setEnablepurchasecash(value);
                break;
            case 11:
                var value = /** @type {boolean} */ (reader.readBool());
                msg.setEnabletopup(value);
                break;
            case 12:
                var value = /** @type {boolean} */ (reader.readBool());
                msg.setEnablecashtogold(value);
                break;
            case 13:
                var value = /** @type {boolean} */ (reader.readBool());
                msg.setEnablecashtransfer(value);
                break;
            case 14:
                var value = /** @type {boolean} */ (reader.readBool());
                msg.setEnablegiftcode(value);
                break;
            case 15:
                var value = /** @type {number} */ (reader.readInt32());
                msg.setCashtogoldratio(value);
                break;
            case 16:
                var value = /** @type {string} */ (reader.readString());
                msg.addHotlines(value);
                break;
            case 17:
                var value = /** @type {string} */ (reader.readString());
                msg.setFanpageurl(value);
                break;
            case 18:
                var value = /** @type {string} */ (reader.readString());
                msg.setWebsiteurl(value);
                break;
            case 19:
                var value = /** @type {!Array.<number>} */ (reader.readPackedInt32());
                msg.setEnablegameidsList(value);
                break;
            case 20:
                var value = /** @type {string} */ (reader.readString());
                msg.setResetpwsmssyntax(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.BINInitializeResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.BINInitializeResponse.serializeBinaryToWriter = function(message, writer) {
    message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BINInitializeResponse.prototype.serializeBinary = function() {
    var writer = new jspb.BinaryWriter();
    this.serializeBinaryToWriter(writer);
    return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.BINInitializeResponse.prototype.serializeBinaryToWriter = function (writer) {
    var f = undefined;
    f = this.getResponsecode();
    if (f) {
        writer.writeBool(
            1,
            f
        );
    }
    f = this.getMessage();
    if (f.length > 0) {
        writer.writeString(
            2,
            f
        );
    }
    f = this.getCurrentappversion();
    if (f.length > 0) {
        writer.writeString(
            3,
            f
        );
    }
    f = this.getDownloadurl();
    if (f.length > 0) {
        writer.writeString(
            4,
            f
        );
    }
    f = this.getCashcurrency();
    if (f.length > 0) {
        writer.writeString(
            5,
            f
        );
    }
    f = this.getGoldcurrency();
    if (f.length > 0) {
        writer.writeString(
            6,
            f
        );
    }
    f = this.getForceupdate();
    if (f) {
        writer.writeBool(
            7,
            f
        );
    }
    f = this.getEnablequickplay();
    if (f) {
        writer.writeBool(
            8,
            f
        );
    }
    f = this.getEnablecashsystem();
    if (f) {
        writer.writeBool(
            9,
            f
        );
    }
    f = this.getEnablepurchasecash();
    if (f) {
        writer.writeBool(
            10,
            f
        );
    }
    f = this.getEnabletopup();
    if (f) {
        writer.writeBool(
            11,
            f
        );
    }
    f = this.getEnablecashtogold();
    if (f) {
        writer.writeBool(
            12,
            f
        );
    }
    f = this.getEnablecashtransfer();
    if (f) {
        writer.writeBool(
            13,
            f
        );
    }
    f = this.getEnablegiftcode();
    if (f) {
        writer.writeBool(
            14,
            f
        );
    }
    f = this.getCashtogoldratio();
    if (f !== 0) {
        writer.writeInt32(
            15,
            f
        );
    }
    f = this.getHotlinesList();
    if (f.length > 0) {
        writer.writeRepeatedString(
            16,
            f
        );
    }
    f = this.getFanpageurl();
    if (f.length > 0) {
        writer.writeString(
            17,
            f
        );
    }
    f = this.getWebsiteurl();
    if (f.length > 0) {
        writer.writeString(
            18,
            f
        );
    }
    f = this.getEnablegameidsList();
    if (f.length > 0) {
        writer.writePackedInt32(
            19,
            f
        );
    }
    f = this.getResetpwsmssyntax();
    if (f.length > 0) {
        writer.writeString(
            20,
            f
        );
    }
};


/**
 * optional bool responseCode = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.BINInitializeResponse.prototype.getResponsecode = function() {
    return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.BINInitializeResponse.prototype.setResponsecode = function(value) {
    jspb.Message.setField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.BINInitializeResponse.prototype.getMessage = function() {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.BINInitializeResponse.prototype.setMessage = function(value) {
    jspb.Message.setField(this, 2, value);
};


/**
 * optional string currentAppVersion = 3;
 * @return {string}
 */
proto.BINInitializeResponse.prototype.getCurrentappversion = function() {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.BINInitializeResponse.prototype.setCurrentappversion = function(value) {
    jspb.Message.setField(this, 3, value);
};


/**
 * optional string downloadUrl = 4;
 * @return {string}
 */
proto.BINInitializeResponse.prototype.getDownloadurl = function() {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.BINInitializeResponse.prototype.setDownloadurl = function(value) {
    jspb.Message.setField(this, 4, value);
};


/**
 * optional string cashCurrency = 5;
 * @return {string}
 */
proto.BINInitializeResponse.prototype.getCashcurrency = function() {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.BINInitializeResponse.prototype.setCashcurrency = function(value) {
    jspb.Message.setField(this, 5, value);
};


/**
 * optional string goldCurrency = 6;
 * @return {string}
 */
proto.BINInitializeResponse.prototype.getGoldcurrency = function() {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.BINInitializeResponse.prototype.setGoldcurrency = function(value) {
    jspb.Message.setField(this, 6, value);
};


/**
 * optional bool forceUpdate = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.BINInitializeResponse.prototype.getForceupdate = function() {
    return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.BINInitializeResponse.prototype.setForceupdate = function(value) {
    jspb.Message.setField(this, 7, value);
};


/**
 * optional bool enableQuickPlay = 8;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.BINInitializeResponse.prototype.getEnablequickplay = function() {
    return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.BINInitializeResponse.prototype.setEnablequickplay = function(value) {
    jspb.Message.setField(this, 8, value);
};


/**
 * optional bool enableCashSystem = 9;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.BINInitializeResponse.prototype.getEnablecashsystem = function() {
    return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 9, false));
};


/** @param {boolean} value */
proto.BINInitializeResponse.prototype.setEnablecashsystem = function(value) {
    jspb.Message.setField(this, 9, value);
};


/**
 * optional bool enablePurchaseCash = 10;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.BINInitializeResponse.prototype.getEnablepurchasecash = function() {
    return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 10, false));
};


/** @param {boolean} value */
proto.BINInitializeResponse.prototype.setEnablepurchasecash = function(value) {
    jspb.Message.setField(this, 10, value);
};


/**
 * optional bool enableTopup = 11;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.BINInitializeResponse.prototype.getEnabletopup = function() {
    return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 11, false));
};


/** @param {boolean} value */
proto.BINInitializeResponse.prototype.setEnabletopup = function(value) {
    jspb.Message.setField(this, 11, value);
};


/**
 * optional bool enableCashToGold = 12;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.BINInitializeResponse.prototype.getEnablecashtogold = function() {
    return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 12, false));
};


/** @param {boolean} value */
proto.BINInitializeResponse.prototype.setEnablecashtogold = function(value) {
    jspb.Message.setField(this, 12, value);
};


/**
 * optional bool enableCashTransfer = 13;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.BINInitializeResponse.prototype.getEnablecashtransfer = function() {
    return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 13, false));
};


/** @param {boolean} value */
proto.BINInitializeResponse.prototype.setEnablecashtransfer = function(value) {
    jspb.Message.setField(this, 13, value);
};


/**
 * optional bool enableGiftCode = 14;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.BINInitializeResponse.prototype.getEnablegiftcode = function() {
    return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 14, false));
};


/** @param {boolean} value */
proto.BINInitializeResponse.prototype.setEnablegiftcode = function(value) {
    jspb.Message.setField(this, 14, value);
};


/**
 * optional int32 cashToGoldRatio = 15;
 * @return {number}
 */
proto.BINInitializeResponse.prototype.getCashtogoldratio = function() {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/** @param {number} value */
proto.BINInitializeResponse.prototype.setCashtogoldratio = function(value) {
    jspb.Message.setField(this, 15, value);
};


/**
 * repeated string hotlines = 16;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.BINInitializeResponse.prototype.getHotlinesList = function() {
    return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 16));
};


/** @param {!Array.<string>} value */
proto.BINInitializeResponse.prototype.setHotlinesList = function(value) {
    jspb.Message.setField(this, 16, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.BINInitializeResponse.prototype.addHotlines = function(value, opt_index) {
    jspb.Message.addToRepeatedField(this, 16, value, opt_index);
};


proto.BINInitializeResponse.prototype.clearHotlinesList = function() {
    this.setHotlinesList([]);
};


/**
 * optional string fanpageUrl = 17;
 * @return {string}
 */
proto.BINInitializeResponse.prototype.getFanpageurl = function() {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/** @param {string} value */
proto.BINInitializeResponse.prototype.setFanpageurl = function(value) {
    jspb.Message.setField(this, 17, value);
};


/**
 * optional string websiteUrl = 18;
 * @return {string}
 */
proto.BINInitializeResponse.prototype.getWebsiteurl = function() {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/** @param {string} value */
proto.BINInitializeResponse.prototype.setWebsiteurl = function(value) {
    jspb.Message.setField(this, 18, value);
};


/**
 * repeated int32 enableGameIds = 19;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.BINInitializeResponse.prototype.getEnablegameidsList = function() {
    return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 19));
};


/** @param {!Array.<number>} value */
proto.BINInitializeResponse.prototype.setEnablegameidsList = function(value) {
    jspb.Message.setField(this, 19, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.BINInitializeResponse.prototype.addEnablegameids = function(value, opt_index) {
    jspb.Message.addToRepeatedField(this, 19, value, opt_index);
};


proto.BINInitializeResponse.prototype.clearEnablegameidsList = function() {
    this.setEnablegameidsList([]);
};


/**
 * optional string resetPwSmsSyntax = 20;
 * @return {string}
 */
proto.BINInitializeResponse.prototype.getResetpwsmssyntax = function() {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/** @param {string} value */
proto.BINInitializeResponse.prototype.setResetpwsmssyntax = function(value) {
    jspb.Message.setField(this, 20, value);
};


goog.object.extend(exports, proto);
